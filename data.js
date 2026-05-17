// AI工具数据
const AI_TOOLS = [
  // ========== 聊天对话 ==========
  {
    id: 1,
    name: "DeepSeek",
    category: "chat",
    tags: ["国产", "免费"],
    description: "国产AI扛把子，数学和代码能力强，性价比高，适合开发者和学习者",
    url: "https://www.deepseek.com",
    views: 28476392
  },
  {
    id: 2,
    name: "豆包",
    category: "chat",
    tags: ["国产", "免费"],
    description: "字节跳动出品，日活超1亿，交互体验好，深度整合抖音生态",
    url: "https://www.doubao.com",
    views: 19583291
  },
  {
    id: 3,
    name: "通义千问",
    category: "chat",
    tags: ["国产", "免费"],
    description: "阿里系AI，深度理解中文，聚焦办公和商务场景，生态完善",
    url: "https://tongyi.aliyun.com",
    views: 18374293
  },
  {
    id: 4,
    name: "Kimi",
    category: "chat",
    tags: ["国产", "免费"],
    description: "月之暗面出品，擅长长文本处理和搜索，信息获取快",
    url: "https://kimi.moonshot.cn",
    views: 16283947
  },
  {
    id: 5,
    name: "文心一言",
    category: "chat",
    tags: ["国产", "免费"],
    description: "百度出品，中文理解强，生成内容质量稳定，企业用户多",
    url: "https://yiyan.baidu.com",
    views: 14582937
  },
  {
    id: 6,
    name: "腾讯元宝",
    category: "chat",
    tags: ["国产", "免费"],
    description: "腾讯混元大模型，深度整合微信生态，支持深度搜索",
    url: "https://yuanbao.tencent.com",
    views: 8923746
  },
  {
    id: 7,
    name: "智谱清言",
    category: "chat",
    tags: ["国产", "免费"],
    description: "智谱AI出品，GLM模型开源，中文理解好，学术场景首选",
    url: "https://www.zhipuai.cn",
    views: 7248539
  },
  {
    id: 8,
    name: "讯飞星火",
    category: "chat",
    tags: ["国产", "免费"],
    description: "科大讯飞出品，语音识别能力强，中文交互流畅",
    url: "https://xinghuo.xfyun.cn",
    views: 5894737
  },

  // ========== AI图像生成 ==========
  {
    id: 9,
    name: "即梦",
    category: "image",
    tags: ["国产", "免费"],
    description: "字节跳动剪映团队出品，图生视频能力强，中文理解精准",
    url: "https://jimeng.jianying.com",
    views: 12847392
  },
  {
    id: 10,
    name: "通义万相",
    category: "image",
    tags: ["国产", "免费"],
    description: "阿里旗下AI绘画工具，风格多样，生成速度快",
    url: "https://wanxiang.aliyun.com",
    views: 9874637
  },
  {
    id: 11,
    name: "秒画",
    category: "image",
    tags: ["国产", "免费"],
    description: "商汤科技出品，支持多种风格，擅长写实人像",
    url: "https://miaohua.sensetime.com",
    views: 7846293
  },
  {
    id: 12,
    name: "绘蛙",
    category: "image",
    tags: ["国产", "免费"],
    description: "阿里巴巴出品，电商场景优化，适合商品图和种草图",
    url: "https://www.huiwa.cn",
    views: 6594837
  },
  {
    id: 13,
    name: "Midjourney",
    category: "image",
    tags: ["海外", "付费"],
    description: "全球最强AI绘画之一，画质顶级，创意无限，需配合Discord使用",
    url: "https://www.midjourney.com",
    views: 18473647
  },
  {
    id: 14,
    name: "Stable Diffusion",
    category: "image",
    tags: ["开源", "免费"],
    description: "最强开源AI绘画工具，可本地部署，插件丰富，可商用",
    url: "https://stability.ai",
    views: 12458937
  },
  {
    id: 15,
    name: "Adobe Firefly",
    category: "image",
    tags: ["海外", "付费"],
    description: "Adobe官方AI绘画，深度集成PS，设计师首选",
    url: "https://www.adobe.com/firefly",
    views: 8937462
  },

  // ========== AI视频生成 ==========
  {
    id: 16,
    name: "可灵",
    category: "video",
    tags: ["国产", "付费"],
    description: "快手自研视频生成大模型，文生视频能力强，运镜自然",
    url: "https://klingai.kuaishou.com",
    views: 9847364
  },
  {
    id: 17,
    name: "智谱清影",
    category: "video",
    tags: ["国产", "免费"],
    description: "智谱AI视频生成工具，4K/60帧，支持配音，性价比高",
    url: "https://chat.zhipuai.cn/video",
    views: 7246398
  },
  {
    id: 18,
    name: "剪映",
    category: "video",
    tags: ["国产", "免费"],
    description: "字节跳动出品，AI剪辑+AI成片，短视频创作者必备",
    url: "https://www.jianying.com",
    views: 21648392
  },
  {
    id: 19,
    name: "腾讯智影",
    category: "video",
    tags: ["国产", "免费"],
    description: "腾讯出品，数字人+配音+剪辑，一站式视频创作",
    url: "https://zenvideo.qq.com",
    views: 8923746
  },
  {
    id: 20,
    name: "HeyGen",
    category: "video",
    tags: ["海外", "付费"],
    description: "数字人视频生成首选，画质逼真，电商带货场景强",
    url: "https://www.heygen.com",
    views: 6748293
  },
  {
    id: 21,
    name: "Sora",
    category: "video",
    tags: ["海外", "付费"],
    description: "OpenAI出品，视频生成标杆，画质真实，动作流畅",
    url: "https://openai.com/sora",
    views: 14873649
  },

  // ========== AI办公 ==========
  {
    id: 22,
    name: "WPS AI",
    category: "office",
    tags: ["国产", "免费"],
    description: "深度嵌入WPS文档/表格/PPT，职场办公首选，中文适配好",
    url: "https://ai.wps.cn",
    views: 17263847
  },
  {
    id: 23,
    name: "腾讯文档AI",
    category: "office",
    tags: ["国产", "免费"],
    description: "腾讯文档智能助手，个人/团队知识库+AI问答+任务执行",
    url: "https://docs.qq.com",
    views: 12847392
  },
  {
    id: 24,
    name: "语雀",
    category: "office",
    tags: ["国产", "免费"],
    description: "蚂蚁集团出品，知识创作+全库问答，技术团队文档管理首选",
    url: "https://www.yuque.com",
    views: 6847392
  },
  {
    id: 25,
    name: "飞书AI",
    category: "office",
    tags: ["国产", "免费"],
    description: "字节跳动企业协作工具，内置AI助手，支持智能汇总",
    url: "https://feishu.cn",
    views: 9237462
  },
  {
    id: 26,
    name: "NotebookLM",
    category: "office",
    tags: ["海外", "免费"],
    description: "Google出品AI研究助理，基于Gemini，学术研究神器",
    url: "https://notebooklm.google.com",
    views: 4874629
  },
  {
    id: 27,
    name: "Gamma",
    category: "office",
    tags: ["海外", "免费"],
    description: "一键生成PPT，AI辅助设计，适合汇报和演示",
    url: "https://gamma.app",
    views: 6937462
  },

  // ========== AI编程 ==========
  {
    id: 28,
    name: "通义灵码",
    category: "code",
    tags: ["国产", "免费"],
    description: "阿里旗下AI编程助手，代码补全、生成、调试一站式",
    url: "https://lingma.aliyun.com",
    views: 5928473
  },
  {
    id: 29,
    name: "Cursor",
    category: "code",
    tags: ["海外", "付费"],
    description: "最强AI编程IDE，代码补全强，Tab模式效率高，开发者首选",
    url: "https://cursor.com",
    views: 11847392
  },
  {
    id: 30,
    name: "GitHub Copilot",
    category: "code",
    tags: ["海外", "付费"],
    description: "微软出品，代码补全之王，深度集成VS Code",
    url: "https://github.com/features/copilot",
    views: 10284739
  },
  {
    id: 31,
    name: "CodeArts Snap",
    category: "code",
    tags: ["国产", "免费"],
    description: "华为云AI编程助手，代码生成、注释、调试全支持",
    url: "https://huaweicloud.com/codearts",
    views: 3847293
  },
  {
    id: 32,
    name: "文心快码",
    category: "code",
    tags: ["国产", "免费"],
    description: "百度出品，基于文心大模型，支持多种编程语言",
    url: "https://cloud.baidu.com",
    views: 2937462
  },

  // ========== AI搜索 ==========
  {
    id: 33,
    name: "夸克",
    category: "search",
    tags: ["国产", "免费"],
    description: "阿里旗下AI浏览器，智能搜索+AI助手，移动端体验好",
    url: "https://www.quark.cn",
    views: 24763928
  },
  {
    id: 34,
    name: "百度AI搜索",
    category: "search",
    tags: ["国产", "免费"],
    description: "百度搜索AI版，智能创作+思路启发+AI阅读",
    url: "https://chat.baidu.com",
    views: 16473928
  },
  {
    id: 35,
    name: "纳米AI搜索",
    category: "search",
    tags: ["国产", "免费"],
    description: "360出品，多模态内容创作引擎，搜索+生成一体化",
    url: "https://www.nani.com",
    views: 8937462
  },
  {
    id: 36,
    name: "Perplexity",
    category: "search",
    tags: ["海外", "免费"],
    description: "AI搜索神器，实时联网，答案带引用，学术研究必备",
    url: "https://www.perplexity.ai",
    views: 12847392
  },

  // ========== AI音乐 ==========
  {
    id: 37,
    name: "网易天音",
    category: "music",
    tags: ["国产", "免费"],
    description: "网易出品，AI音乐创作，一键生成歌曲，支持歌词创作",
    url: "https://tianyin.163.com",
    views: 4837293
  },
  {
    id: 38,
    name: "Suno",
    category: "music",
    tags: ["海外", "免费"],
    description: "全球最强AI音乐生成，输入文字即可创作完整歌曲",
    url: "https://suno.ai",
    views: 9247837
  },
  {
    id: 39,
    name: "天工音乐",
    category: "music",
    tags: ["国产", "免费"],
    description: "昆仑万维出品，支持词曲生成，适合短视频BGM",
    url: "https://music.tiangong.cn",
    views: 2937462
  },

  // ========== AI数字人 ==========
  {
    id: 40,
    name: "万兴播爆",
    category: "digital",
    tags: ["国产", "付费"],
    description: "万兴科技出品，AIGC真人短视频出海营销神器",
    url: "https://www.wondershare.com",
    views: 5928374
  },
  {
    id: 41,
    name: "腾讯智影",
    category: "digital",
    tags: ["国产", "免费"],
    description: "数字人+配音+剪辑，电商带货场景强，一站式",
    url: "https://zenvideo.qq.com",
    views: 7837462
  },
  {
    id: 42,
    name: "HeyGen",
    category: "digital",
    tags: ["海外", "付费"],
    description: "数字人视频首选，画质逼真，口型准确，跨境电商必备",
    url: "https://www.heygen.com",
    views: 8746392
  },
  {
    id: 43,
    name: "怪兽AI数字人",
    category: "digital",
    tags: ["国产", "付费"],
    description: "怪兽智能科技出品，支持直播和短视频数字人",
    url: "https://www.guai.ai",
    views: 3928374
  }
];

// 导出数据
window.AI_TOOLS = AI_TOOLS;