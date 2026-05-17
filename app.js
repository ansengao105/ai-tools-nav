// AI工具导航 - 主逻辑

// 当前分类
let currentCategory = 'all';

// 搜索功能
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  renderTools(e.target.value.trim());
});

// 分类切换
const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderTools();
  });
});

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
  container.innerHTML = filtered.map(tool => `
    <div class="tool-card" onclick="goToTool(${tool.id})">
      <h3>${tool.name}</h3>
      <span class="tag">${tool.tags.join(' / ')}</span>
      <p>${tool.description}</p>
      <div class="stats">
        <span>👁 ${formatNumber(tool.views)} 次浏览</span>
      </div>
    </div>
  `).join('');
  
  // 更新排行
  updateRanking();
}

// 跳转工具（记录点击）
function goToTool(id) {
  const tool = AI_TOOLS.find(t => t.id === id);
  if (tool) {
    // 增加点击数
    tool.views += 1;
    // 打开链接
    window.open(tool.url, '_blank');
    // 重新渲染排行
    updateRanking();
  }
}

// 更新排行榜
function updateRanking() {
  const container = document.getElementById('rankingList');
  
  // 按浏览量排序，取前10
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
renderTools();