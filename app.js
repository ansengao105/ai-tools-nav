// AI工具导航 - 主逻辑

// 当前分类
let currentCategory = 'all';

// 今日推荐数据（每日随机选择）
let dailyPicks = [];

// Logo颜色映射（按首字母分配）
const LOGO_COLORS = {
  'A': '#ff6b6b', 'B': '#feca57', 'C': '#48dbfb', 'D': '#ff9ff3', 'E': '#54a0ff',
  'F': '#5f27cd', 'G': '#00d2d3', 'H': '#ff9f43', 'I': '#ee5a24', 'J': '#0abde3',
  'K': '#10ac84', 'L': '#f368e0', 'M': '#ff6b6b', 'N': '#00d2d3', 'O': '#48dbfb',
  'P': '#feca57', 'Q': '#ff9ff3', 'R': '#54a0ff', 'S': '#5f27cd', 'T': '#1dd1a1',
  'U': '#ff6b6b', 'V': '#feca57', 'W': '#48dbfb', 'X': '#ff9ff3', 'Y': '#54a0ff',
  'Z': '#5f27cd'
};

// 获取工具首字母
function getInitial(name) {
  return name.charAt(0).toUpperCase();
}

// 获取Logo颜色
function getLogoColor(name) {
  const initial = getInitial(name);
  return LOGO_COLORS[initial] || '#7c3aed';
}

// 渲染今日推荐
function renderDailyPicks() {
  const container = document.getElementById('dailyPicks');
  if (!container) return;
  
  // 检查是否已选过今日推荐
  const today = new Date().toDateString();
  const storedDate = localStorage.getItem('dailyPicksDate');
  const storedPicks = localStorage.getItem('dailyPicks');
  
  if (storedDate === today && storedPicks) {
    dailyPicks = JSON.parse(storedPicks);
  } else {
    // 随机选择3-5个工具
    const count = Math.floor(Math.random() * 3) + 3; // 3-5个
    const shuffled = [...AI_TOOLS].sort(() => Math.random() - 0.5);
    dailyPicks = shuffled.slice(0, count);
    
    // 存储到localStorage
    localStorage.setItem('dailyPicksDate', today);
    localStorage.setItem('dailyPicks', JSON.stringify(dailyPicks));
  }
  
  container.innerHTML = dailyPicks.map(tool => {
    const initial = getInitial(tool.name);
    const color = getLogoColor(tool.name);
    const domesticTag = tool.tags.some(t => t === '国产') ? '国产' : (tool.tags.some(t => t === '海外') ? '海外' : '');
    
    return `
      <div class="daily-pick-card" onclick="goToTool(${tool.id})">
        <div class="daily-pick-logo" style="background: ${color}; color: #fff;">
          ${initial}
        </div>
        <div class="daily-pick-info">
          <h4>${tool.name}</h4>
          <span>${formatNumber(tool.views)} 次浏览</span>
        </div>
        ${domesticTag ? `<span class="daily-pick-tag">${domesticTag}</span>` : ''}
      </div>
    `;
  }).join('');
}

// 渲染工具列表
function renderTools(searchTerm = '') {
  const container = document.getElementById('toolsList');
  
  let filtered = AI_TOOLS;
  
  // 分类筛选
  if (currentCategory !== 'all') {
    filtered = filtered.filter(tool => tool.category === currentCategory);
  }
  
  // 搜索筛选
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(tool => 
      tool.name.toLowerCase().includes(term) || 
      tool.description.toLowerCase().includes(term) ||
      tool.tags.some(tag => tag.toLowerCase().includes(term))
    );
  }
  
  // 渲染
  container.innerHTML = filtered.map(tool => {
    const initial = getInitial(tool.name);
    const color = getLogoColor(tool.name);
    const apiIcon = tool.api ? '🔌' : '';
    
    // 处理标签显示
    const tagHTML = tool.tags.map(tag => {
      let className = 'tool-tag';
      if (tag === '免费') className += ' free';
      else if (tag === '付费') className += ' paid';
      else if (tag === '国产') className += ' domestic';
      return `<span class="${className}">${tag}</span>`;
    }).join('');
    
    return `
      <div class="tool-card" onclick="goToTool(${tool.id})">
        <div class="tool-card-header">
          <div class="tool-logo" style="background: ${color}; color: #fff;">
            ${initial}
          </div>
          <div class="tool-card-title">
            <h3>
              ${tool.name}
              ${apiIcon ? `<span class="tool-api-icon" title="支持API">🔌</span>` : ''}
            </h3>
            <div class="tool-tags">${tagHTML}</div>
          </div>
        </div>
        <p>${tool.description}</p>
        <div class="stats">
          <span class="views">👁 ${formatNumber(tool.views)} 次浏览</span>
        </div>
      </div>
    `;
  }).join('');
  
  // 更新排行
  updateRanking();
}

// 跳转工具（记录点击）
function goToTool(id) {
  const tool = AI_TOOLS.find(t => t.id === id);
  if (tool) {
    // 增加点击数
    tool.views += 1;
    // 保存到本地存储（持久化）
    saveViewsToStorage();
    // 打开链接
    window.open(tool.url, '_blank');
    // 重新渲染排行
    updateRanking();
  }
}

// 从本地存储加载浏览量
function loadViewsFromStorage() {
  try {
    const stored = localStorage.getItem('aiToolsViews');
    if (stored) {
      const viewsMap = JSON.parse(stored);
      AI_TOOLS.forEach(tool => {
        if (viewsMap[tool.id]) {
          tool.views = viewsMap[tool.id];
        }
      });
    }
  } catch (e) {
    console.log('无法加载浏览量数据');
  }
}

// 保存浏览量到本地存储
function saveViewsToStorage() {
  const viewsMap = {};
  AI_TOOLS.forEach(tool => {
    viewsMap[tool.id] = tool.views;
  });
  localStorage.setItem('aiToolsViews', JSON.stringify(viewsMap));
}

// 更新排行榜
function updateRanking() {
  const container = document.getElementById('rankingList');
  
  // 按浏览量排序，取前10（使用实时浏览量）
  const top10 = [...AI_TOOLS]
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);
  
  container.innerHTML = top10.map((tool, index) => `
    <div class="ranking-item" onclick="goToTool(${tool.id})">
      <div class="rank ${index < 3 ? 'top3' : ''}">${index + 1}</div>
      <div class="info">
        <h4>${tool.name}</h4>
        <span>${formatNumber(tool.views)} 次浏览</span>
      </div>
    </div>
  `).join('');
}

// 格式化数字
function formatNumber(num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿';
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  }
  return num.toLocaleString();
}

// 初始化
function init() {
  // 加载持久化的浏览量数据
  loadViewsFromStorage();
  // 渲染今日推荐
  renderDailyPicks();
  // 渲染工具列表
  renderTools();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);