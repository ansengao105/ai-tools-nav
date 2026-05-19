// AI工具导航 - 主逻辑 (v2)

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

// 格式化数字
function formatNumber(num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿';
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  }
  return num.toLocaleString();
}

// ====== v2 新增：Hero 区域 ======
function renderHero() {
  const container = document.getElementById('hero');
  if (!container) return;

  container.innerHTML = `
    <div class="hero">
      <div class="container hero-content">
        <h1>AI工具导航 - 帮助小白找到合适的AI助手</h1>
        <p class="subtitle">收录122款AI工具，对比式呈现，帮你做决策</p>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-num">122</div>
            <div class="stat-label">收录工具</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">12</div>
            <div class="stat-label">分类覆盖</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">100%</div>
            <div class="stat-label">免费精选</div>
          </div>
        </div>
        <div class="search-box">
          <input type="text" id="heroSearch" placeholder="搜索你想要的AI工具... (如：编程、写作、图像)">
        </div>
      </div>
    </div>
  `;

  // Hero 搜索框事件
  const heroSearch = document.getElementById('heroSearch');
  if (heroSearch) {
    heroSearch.addEventListener('input', (e) => {
      const term = e.target.value;
      // 如果有搜索词，跳到工具列表并筛选
      if (term.trim()) {
        currentCategory = 'all';
        renderTools(term);
        // 更新分类按钮高亮
        document.querySelectorAll('.category-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.category === 'all');
        });
        // 滚动到工具列表
        document.querySelector('.all-tools-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// ====== v2 新增：本周热门 ======
function renderHotSection() {
  const container = document.getElementById('hotSection');
  if (!container) return;

  // 取浏览量最高的前5个（排除明显过高的假数据）
  const hotTools = [...AI_TOOLS]
    .filter(t => t.views < 50000000) // 过滤过高数据
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  container.innerHTML = hotTools.map((tool, index) => {
    const color = getLogoColor(tool.name);
    const initial = getInitial(tool.name);
    return `
      <div class="hot-card" onclick="goToTool(${tool.id})">
        <div class="hot-rank">${index + 1}</div>
        <div class="hot-logo" style="background: ${color};">${initial}</div>
        <div class="hot-name">${tool.name}</div>
        <div class="hot-desc">${tool.description}</div>
        <div class="hot-views">👁 ${formatNumber(tool.views)} 次浏览</div>
      </div>
    `;
  }).join('');
}

// ====== v2 新增：编辑推荐 ======
function renderEditorPicks() {
  const container = document.getElementById('editorSection');
  if (!container) return;

  // 精选6个，覆盖不同分类，手动指定推荐理由
  const picks = [
    { id: 71, reason: '最适合入门的AI编程工具', tags: ['海外', '免费', '独立开发'] },
    { id: 18, reason: '国产AI对话最强', tags: ['国产', '免费', '独立开发'] },
    { id: 84, reason: 'AI搜索必备，学术研究神器', tags: ['海外', '免费', '独立开发'] },
    { id: 95, reason: '全球最强AI音乐生成', tags: ['海外', '免费', '独立开发'] },
    { id: 58, reason: '职场办公AI首选', tags: ['国产', '免费', '大厂'] },
    { id: 1,  reason: '史上增长最快的开源Agent', tags: ['开源', '免费', '独立开发'] },
  ];

  container.innerHTML = picks.map(pick => {
    const tool = AI_TOOLS.find(t => t.id === pick.id);
    if (!tool) return '';
    const color = getLogoColor(tool.name);
    const initial = getInitial(tool.name);
    const tagHTML = pick.tags.map(t => `<span class="editor-tag">${t}</span>`).join('');
    return `
      <div class="editor-card" onclick="goToTool(${tool.id})">
        <div class="editor-reason">${pick.reason}</div>
        <div class="editor-logo" style="background: ${color};">${initial}</div>
        <div class="editor-name">${tool.name}</div>
        <div class="editor-desc">${tool.description}</div>
        <div class="editor-tags">${tagHTML}</div>
      </div>
    `;
  }).join('');
}

// ====== v2 新增：分类卡片 ======
function renderCategoryCards() {
  const container = document.getElementById('categorySection');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => {
    const tools = AI_TOOLS.filter(t => t.category === cat.id).slice(0, 3);
    const total = AI_TOOLS.filter(t => t.category === cat.id).length;
    const toolItems = tools.map(t => {
      const color = getLogoColor(t.name);
      const initial = getInitial(t.name);
      return `
        <div class="cat-tool-item">
          <div class="cat-tool-logo" style="background: ${color};">${initial}</div>
          <span>${t.name}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="category-card" onclick="filterByCategory('${cat.id}')">
        <div class="cat-icon">${cat.icon}</div>
        <div class="cat-name">${cat.name}</div>
        <div class="cat-count">${total} 款工具</div>
        <div class="cat-tools">${toolItems}</div>
        <div class="cat-viewall">查看全部 →</div>
      </div>
    `;
  }).join('');
}

// 分类卡片点击 → 筛选该分类并滚动
function filterByCategory(catId) {
  currentCategory = catId;
  renderTools();
  // 更新分类按钮
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === catId);
  });
  // 滚动到工具列表
  document.querySelector('.all-tools-section')?.scrollIntoView({ behavior: 'smooth' });
}

// ====== 原有功能（保留兼容）======

// 渲染今日推荐
function renderDailyPicks() {
  const container = document.getElementById('dailyPicks');
  if (!container) return;

  const today = new Date().toDateString();
  const storedDate = localStorage.getItem('dailyPicksDate');
  const storedPicks = localStorage.getItem('dailyPicks');

  if (storedDate === today && storedPicks) {
    dailyPicks = JSON.parse(storedPicks);
  } else {
    const count = Math.floor(Math.random() * 3) + 3;
    const shuffled = [...AI_TOOLS].sort(() => Math.random() - 0.5);
    dailyPicks = shuffled.slice(0, count);
    localStorage.setItem('dailyPicksDate', today);
    localStorage.setItem('dailyPicks', JSON.stringify(dailyPicks));
  }

  container.innerHTML = dailyPicks.map(tool => {
    const initial = getInitial(tool.name);
    const color = getLogoColor(tool.name);
    const domesticTag = tool.tags.some(t => t === '国产') ? '国产' : (tool.tags.some(t => t === '海外') ? '海外' : '');

    return `
      <div class="daily-pick-card" onclick="goToTool(${tool.id})">
        <div class="daily-pick-logo" style="background: ${color}; color: #fff;">${initial}</div>
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
  if (!container) return;

  let filtered = AI_TOOLS;

  if (currentCategory !== 'all') {
    filtered = filtered.filter(tool => tool.category === currentCategory);
  }

  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(tool =>
      tool.name.toLowerCase().includes(term) ||
      tool.description.toLowerCase().includes(term) ||
      tool.tags.some(tag => tag.toLowerCase().includes(term))
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '<p style="color:#888;text-align:center;padding:40px;">没有找到相关工具</p>';
    return;
  }

  container.innerHTML = filtered.map(tool => {
    const initial = getInitial(tool.name);
    const color = getLogoColor(tool.name);

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
          <div class="tool-logo" style="background: ${color}; color: #fff;">${initial}</div>
          <div class="tool-card-title">
            <h3>${tool.name}</h3>
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

  updateRanking();
}

// 跳转工具（记录点击）
function goToTool(id) {
  const tool = AI_TOOLS.find(t => t.id === id);
  if (tool) {
    tool.views += 1;
    saveViewsToStorage();
    window.open(tool.url, '_blank');
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
    // ignore
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
  if (!container) return;

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

// 初始化
function init() {
  loadViewsFromStorage();

  // 根据页面版本选择渲染方式
  const heroEl = document.getElementById('hero');
  const dailyPicksEl = document.getElementById('dailyPicks');

  if (heroEl) {
    // v2 页面
    renderHero();
    renderHotSection();
    renderEditorPicks();
    renderCategoryCards();
    renderTools();
  } else if (dailyPicksEl) {
    // 原有页面
    renderDailyPicks();
    renderTools();
  }

  // 搜索框事件
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.trim();
      currentCategory = 'all';
      renderTools(term);
      // 高亮"全部"按钮
      document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
      });
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const term = e.target.value.trim();
        currentCategory = 'all';
        renderTools(term);
        document.querySelectorAll('.category-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.category === 'all');
        });
      }
    });
  }

  // 分类导航事件（v2页面）
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      currentCategory = cat;
      renderTools();
      document.querySelectorAll('.category-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.category === cat);
      });
    });
  });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
