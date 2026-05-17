// AI工具数据 - 2026年最新版（更全面收录）
const AI_TOOLS = [
  // ========== AI智能体/Agent框架 ==========
  {
    id: 1,
    name: "OpenClaw（龙虾）",
    category: "agent",
    tags: ["开源", "免费", "独立开发"],
    description: "开源AI智能体框架，本地优先，可执行复杂任务。GitHub星标30万+，史上增长最快的开源项目",
    url: "https://openclaw.ai",
    views: 38476392
  },
  {
    id: 2,
    name: "QClaw（小龙虾AI）",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "腾讯出品，微信远程操控电脑，本地部署，支持多Agent并行工作",
    url: "https://qclaw.qq.com",
    views: 25482947
  },
  {
    id: 3,
    name: "WorkBuddy",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "腾讯全场景职场AI智能体桌面工作台，企业微信深度集成",
    url: "https://workbuddy.qq.com",
    views: 22847392
  },
  {
    id: 4,
    name: "飞书aily",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "字节跳动飞书智能体平台，支持企业级Agent开发，深度集成飞书办公生态",
    url: "https://www.feishu.cn",
    views: 19247837
  },
  {
    id: 5,
    name: "钉钉AI助理（悟空）",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "钉钉全新AI原生工作平台，深度集成钉钉生态，支持任务规划、自动执行",
    url: "https://wukong.dingtalk.com/",
    views: 18937462
  },
  {
    id: 6,
    name: "Coze（扣子）",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "字节跳动低代码AI智能体开发平台，可视化编排，支持飞书、抖音等生态",
    url: "https://www.coze.cn",
    views: 20284739
  },
  {
    id: 7,
    name: "文心智能体",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "百度基于文心大模型的智能体平台，RAG增强降低幻觉，支持知识库检索",
    url: "https://agents.baidu.com",
    views: 17248539
  },
  {
    id: 8,
    name: "智谱AI智能体",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "智谱GLM大模型驱动，支持AutoGLM沉思，可自动操作浏览器",
    url: "https://www.zhipuai.cn",
    views: 15894737
  },
  {
    id: 9,
    name: "BetterYeah AI",
    category: "agent",
    tags: ["国产", "付费", "企业级"],
    description: "企业级AI智能体平台标杆，NeuroFlow+VisionRAG双引擎，已服务近10万家企业",
    url: "https://www.betteryeah.com",
    views: 15928473
  },
  {
    id: 10,
    name: "阿里云百炼",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "阿里云大模型服务平台，支持Qwen3全系列，低代码构建智能体",
    url: "https://bailian.aliyun.com",
    views: 17846293
  },
  {
    id: 11,
    name: "腾讯智脑Agent",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "基于混元大模型的一站式智能体创作与分发平台，零代码创建",
    url: "https://adp.tencentcloud.com/zh",
    views: 16847392
  },
  {
    id: 12,
    name: "讯飞星火智能体",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "科大讯飞AI智能体开发平台，深度垂直训练，语音交互强",
    url: "https://xinghuo.xfyun.cn",
    views: 14847392
  },
  {
    id: 13,
    name: "天工超级智能体",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "昆仑万维AI Agent手机APP，全球首款Office智能体",
    url: "https://www.tiangong.cn",
    views: 8937462
  },
  {
    id: 14,
    name: "华为云AgentArts",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "华为云企业级Agent平台，内置业务场景模板",
    url: "https://www.huaweicloud.com",
    views: 9928374
  },
  {
    id: 15,
    name: "Dify",
    category: "agent",
    tags: ["开源", "免费", "独立开发"],
    description: "LLM应用开发平台，支持超过10万个应用构建，开源社区活跃",
    url: "https://dify.ai/zh",
    views: 7846293
  },
  {
    id: 16,
    name: "n8n",
    category: "agent",
    tags: ["开源", "免费", "独立开发"],
    description: "工作流自动化平台，AI Agent式自动化，支持多种集成",
    url: "https://n8n.io",
    views: 6937462
  },
  {
    id: 17,
    name: "扣子Coze",
    category: "agent",
    tags: ["国产", "免费", "大厂"],
    description: "字节跳动AI智能体开发平台，海量插件和工作流模板",
    url: "https://www.coze.cn",
    views: 18294739
  },

  // ========== 聊天对话AI ==========
  {
    id: 18,
    name: "DeepSeek",
    category: "chat",
    tags: ["国产", "免费", "独立开发"],
    description: "国产AI扛把子，数学和代码能力强，性价比高，开发者首选",
    url: "https://www.deepseek.com",
    views: 48476392
  },
  {
    id: 19,
    name: "豆包",
    category: "chat",
    tags: ["国产", "免费", "大厂"],
    description: "字节跳动出品，日活超1亿，交互体验好，深度整合抖音生态",
    url: "https://www.doubao.com",
    views: 39583291
  },
  {
    id: 20,
    name: "通义千问",
    category: "chat",
    tags: ["国产", "免费", "大厂"],
    description: "阿里系AI，深度理解中文，聚焦办公和商务场景，生态完善",
    url: "https://tongyi.aliyun.com",
    views: 38374293
  },
  {
    id: 21,
    name: "Kimi",
    category: "chat",
    tags: ["国产", "免费", "独立开发"],
    description: "月之暗面出品，擅长长文本处理和搜索，信息获取快",
    url: "https://kimi.moonshot.cn",
    views: 36283947
  },
  {
    id: 22,
    name: "文心一言",
    category: "chat",
    tags: ["国产", "免费", "大厂"],
    description: "百度出品，中文理解强，生成内容质量稳定，企业用户多",
    url: "https://yiyan.baidu.com",
    views: 34582937
  },
  {
    id: 23,
    name: "腾讯元宝",
    category: "chat",
    tags: ["国产", "免费", "大厂"],
    description: "腾讯混元大模型，深度整合微信生态，支持深度搜索",
    url: "https://yuanbao.tencent.com",
    views: 28923746
  },
  {
    id: 24,
    name: "智谱清言",
    category: "chat",
    tags: ["国产", "免费", "大厂"],
    description: "智谱AI出品，GLM模型开源，中文理解好，学术场景首选",
    url: "https://chatglm.cn",
    views: 27248539
  },
  {
    id: 25,
    name: "讯飞星火",
    category: "chat",
    tags: ["国产", "免费", "大厂"],
    description: "科大讯飞出品，语音识别能力强，中文交互流畅",
    url: "https://xinghuo.xfyun.cn",
    views: 25894737
  },
  {
    id: 26,
    name: "360智脑",
    category: "chat",
    tags: ["国产", "免费", "大厂"],
    description: "360出品，集成搜索和AI能力，多模态交互",
    url: "https://brain.360.cn",
    views: 18923746
  },
  {
    id: 27,
    name: "搜狗AI",
    category: "chat",
    tags: ["国产", "免费", "大厂"],
    description: "搜狗搜索AI升级版，中文搜索理解精准",
    url: "https://chat.sogou.com",
    views: 15847392
  },
  {
    id: 28,
    name: "Moonshot AI",
    category: "chat",
    tags: ["国产", "免费", "独立开发"],
    description: "Kimi同厂，通用能力均衡，支持多模态生成",
    url: "https://moonshot.cn",
    views: 12847392
  },
  {
    id: 29,
    name: "百川AI",
    category: "chat",
    tags: ["国产", "免费", "独立开发"],
    description: "百川智能出品，擅长对话和知识问答，开源模型丰富",
    url: "https://www.baichuan-ai.com/",
    views: 9847392
  },
  {
    id: 30,
    name: "商量AI",
    category: "chat",
    tags: ["国产", "免费", "大厂"],
    description: "商汤科技出品，量大模型能力强，多模态",
    url: "https://chat.sensetime.com/",
    views: 7846293
  },

  // ========== AI图像生成 ==========
  {
    id: 31,
    name: "即梦",
    category: "image",
    tags: ["国产", "免费", "大厂"],
    description: "字节跳动剪映团队出品，图生视频能力强，中文理解精准",
    url: "https://jimeng.jianying.com",
    views: 32847392
  },
  {
    id: 32,
    name: "通义万相",
    category: "image",
    tags: ["国产", "免费", "大厂"],
    description: "阿里旗下AI绘画工具，风格多样，生成速度快",
    url: "https://wanxiang.aliyun.com",
    views: 29874637
  },
  {
    id: 33,
    name: "秒画",
    category: "image",
    tags: ["国产", "免费", "大厂"],
    description: "商汤科技出品，支持多种风格，擅长写实人像",
    url: "https://miaohua.sensetime.com",
    views: 27846293
  },
  {
    id: 34,
    name: "绘蛙",
    category: "image",
    tags: ["国产", "免费", "大厂"],
    description: "阿里巴巴出品，电商场景优化，适合商品图和种草图",
    url: "https://www.huiwa.cn",
    views: 26594837
  },
  {
    id: 35,
    name: "LiblibAI",
    category: "image",
    tags: ["国产", "免费", "独立开发"],
    description: "模型社区+生图一站式平台，海量免费模型可下载",
    url: "https://www.liblib.art",
    views: 24847392
  },
  {
    id: 36,
    name: "Midjourney",
    category: "image",
    tags: ["海外", "付费"],
    description: "全球最强AI绘画之一，画质顶级，创意无限",
    url: "https://www.midjourney.com",
    views: 38473647
  },
  {
    id: 37,
    name: "Stable Diffusion",
    category: "image",
    tags: ["开源", "免费", "独立开发"],
    description: "最强开源AI绘画工具，可本地部署，插件丰富",
    url: "https://stability.ai",
    views: 32458937
  },
  {
    id: 38,
    name: "Adobe Firefly",
    category: "image",
    tags: ["海外", "付费"],
    description: "Adobe官方AI绘画，深度集成PS，设计师首选",
    url: "https://www.adobe.com/firefly",
    views: 26937462
  },
  {
    id: 39,
    name: "简单AI",
    category: "image",
    tags: ["国产", "免费", "大厂"],
    description: "美图旗下AI绘画工具，操作简单，风格丰富",
    url: "https://www.meitu.com/zh/",
    views: 18937462
  },
  {
    id: 40,
    name: "堆友AI",
    category: "image",
    tags: ["国产", "免费", "独立开发"],
    description: "阿里巴巴设计师团队出品，专注电商设计素材",
    url: "https://d.design/",
    views: 12847392
  },
  {
    id: 41,
    name: "星流AI",
    category: "image",
    tags: ["国产", "免费", "独立开发"],
    description: "LiblibAI旗下子平台，专注图像生成",
    url: "https://www.starcomic.com",
    views: 9847392
  },
  {
    id: 42,
    name: "Tiamat",
    category: "image",
    tags: ["国产", "免费", "独立开发"],
    description: "国产AI艺术生成工具，专注插画和概念设计",
    url: "https://www.tiamat.com",
    views: 7846293
  },
  {
    id: 43,
    name: "Vega AI",
    category: "image",
    tags: ["国产", "免费", "独立开发"],
    description: "左手医生出品，AI绘画工具，支持多种风格",
    url: "https://www.vegaai.com",
    views: 6837462
  },
  {
    id: 44,
    name: "PicPi",
    category: "image",
    tags: ["国产", "免费", "独立开发"],
    description: "AI图像生成和编辑工具，界面简洁易用",
    url: "https://www.picpi.cn/",
    views: 4937293
  },
  {
    id: 45,
    name: "DALL-E",
    category: "image",
    tags: ["海外", "付费"],
    description: "OpenAI出品，与ChatGPT深度集成，指令执行率高",
    url: "https://openai.com/dall-e-3",
    views: 19847392
  },

  // ========== AI视频生成 ==========
  {
    id: 46,
    name: "可灵",
    category: "video",
    tags: ["国产", "付费", "大厂"],
    description: "快手自研视频生成大模型，文生视频能力强，运镜自然",
    url: "https://klingai.kuaishou.com",
    views: 29847364
  },
  {
    id: 47,
    name: "智谱清影",
    category: "video",
    tags: ["国产", "免费", "大厂"],
    description: "智谱AI视频生成工具，4K/60帧，支持配音",
    url: "https://chat.zhipuai.cn/video",
    views: 27246398
  },
  {
    id: 48,
    name: "剪映",
    category: "video",
    tags: ["国产", "免费", "大厂"],
    description: "字节跳动出品，AI剪辑+AI成片，短视频创作者必备",
    url: "https://www.jianying.com",
    views: 51648392
  },
  {
    id: 49,
    name: "腾讯智影",
    category: "video",
    tags: ["国产", "免费", "大厂"],
    description: "腾讯出品，数字人+配音+剪辑，一站式视频创作",
    url: "https://zenvideo.qq.com",
    views: 28923746
  },
  {
    id: 50,
    name: "HeyGen",
    category: "video",
    tags: ["海外", "付费"],
    description: "数字人视频生成首选，画质逼真，电商带货场景强",
    url: "https://www.heygen.com",
    views: 26748293
  },
  {
    id: 51,
    name: "Sora",
    category: "video",
    tags: ["海外", "付费"],
    description: "OpenAI出品，视频生成标杆，画质真实，动作流畅",
    url: "https://openai.com/sora",
    views: 34873649
  },
  {
    id: 52,
    name: "万兴播爆",
    category: "video",
    tags: ["国产", "付费", "大厂"],
    description: "万兴科技出品，AIGC真人短视频出海营销神器",
    url: "https://www.wondershare.com",
    views: 15928374
  },
  {
    id: 53,
    name: "必剪AI",
    category: "video",
    tags: ["国产", "免费", "大厂"],
    description: "B站旗下，适配短视频平台，自带B站热门模板",
    url: "https://bcut.bilibili.com",
    views: 18294737
  },
  {
    id: 54,
    name: "快影AI",
    category: "video",
    tags: ["国产", "免费", "大厂"],
    description: "火山引擎出品，轻量化视频剪辑工具，手机端快速出片",
    url: "https://kuaiying.huoshan.com",
    views: 12847392
  },
  {
    id: 55,
    name: "Pika",
    category: "video",
    tags: ["海外", "免费"],
    description: "文本/图像转视频神器，动态效果自然",
    url: "https://pika.art",
    views: 16847392
  },
  {
    id: 56,
    name: "Runway",
    category: "video",
    tags: ["海外", "付费"],
    description: "AI视频创作平台，Gen-2/Gen-3模型领先",
    url: "https://runwayml.com",
    views: 22847392
  },
  {
    id: 57,
    name: "Stable Video",
    category: "video",
    tags: ["开源", "免费"],
    description: "Stability AI出品，基于Stable Diffusion的视频生成",
    url: "https://www.stability.ai/stable-video",
    views: 12847392
  },

  // ========== AI办公 ==========
  {
    id: 58,
    name: "WPS AI",
    category: "office",
    tags: ["国产", "免费", "大厂"],
    description: "深度嵌入WPS文档/表格/PPT，职场办公首选",
    url: "https://ai.wps.cn",
    views: 47263847
  },
  {
    id: 59,
    name: "腾讯文档AI",
    category: "office",
    tags: ["国产", "免费", "大厂"],
    description: "腾讯文档智能助手，个人/团队知识库+AI问答+任务执行",
    url: "https://docs.qq.com",
    views: 42847392
  },
  {
    id: 60,
    name: "语雀",
    category: "office",
    tags: ["国产", "免费", "大厂"],
    description: "蚂蚁集团出品，知识创作+全库问答，技术团队文档管理首选",
    url: "https://www.yuque.com",
    views: 26847392
  },
  {
    id: 61,
    name: "飞书",
    category: "office",
    tags: ["国产", "免费", "大厂"],
    description: "字节跳动企业协作平台，AI助手+多维表格+流程审批一体化",
    url: "https://feishu.cn",
    views: 39237462
  },
  {
    id: 62,
    name: "钉钉",
    category: "office",
    tags: ["国产", "免费", "大厂"],
    description: "阿里旗下企业办公平台，AI助理+会议+审批，生态完善",
    url: "https://www.dingtalk.com",
    views: 34847392
  },
  {
    id: 63,
    name: "NotebookLM",
    category: "office",
    tags: ["海外", "免费"],
    description: "Google出品AI研究助理，基于Gemini，学术研究神器",
    url: "https://notebooklm.google.com",
    views: 19847629
  },
  {
    id: 64,
    name: "Gamma",
    category: "office",
    tags: ["海外", "免费"],
    description: "一键生成PPT，AI辅助设计，适合汇报和演示",
    url: "https://gamma.app",
    views: 26937462
  },
  {
    id: 65,
    name: "百度文库",
    category: "office",
    tags: ["国产", "免费", "大厂"],
    description: "百度AI文档助手，智能写作、总结、润色",
    url: "https://wenku.baidu.com",
    views: 22847392
  },
  {
    id: 66,
    name: "办公小浣熊",
    category: "office",
    tags: ["国产", "免费", "独立开发"],
    description: "AI数据分析工具，专注Excel和PPT处理",
    url: "https://xiaohuanxiong.com",
    views: 12847392
  },
  {
    id: 67,
    name: "咔片PPT",
    category: "office",
    tags: ["国产", "免费", "独立开发"],
    description: "AI生成PPT工具，输入主题自动生成演示文稿",
    url: "https://www.kapian.cn",
    views: 9847392
  },
  {
    id: 68,
    name: "AuchWriter",
    category: "office",
    tags: ["国产", "免费", "独立开发"],
    description: "AI写作工具，适合内容创作者，支持多语言",
    url: "https://auchwriter.com",
    views: 7846293
  },
  {
    id: 69,
    name: "ChatDOC",
    category: "office",
    tags: ["国产", "免费", "独立开发"],
    description: "AI文档阅读工具，PDF解析+智能问答",
    url: "https://chatdoc.com",
    views: 6847392
  },

  // ========== AI编程 ==========
  {
    id: 70,
    name: "通义灵码",
    category: "code",
    tags: ["国产", "免费", "大厂"],
    description: "阿里旗下AI编程助手，代码补全、生成、调试一站式",
    url: "https://lingma.aliyun.com",
    views: 25928473
  },
  {
    id: 71,
    name: "Cursor",
    category: "code",
    tags: ["海外", "付费", "独立开发"],
    description: "最强AI编程IDE，代码补全强，Tab模式效率高",
    url: "https://cursor.com",
    views: 41847392
  },
  {
    id: 72,
    name: "GitHub Copilot",
    category: "code",
    tags: ["海外", "付费", "大厂"],
    description: "微软出品，代码补全之王，深度集成VS Code",
    url: "https://github.com/features/copilot",
    views: 40284739
  },
  {
    id: 73,
    name: "CodeArts Snap",
    category: "code",
    tags: ["国产", "免费", "大厂"],
    description: "华为云AI编程助手，代码生成、注释、调试全支持",
    url: "https://www.huaweicloud.com/codearts",
    views: 19847293
  },
  {
    id: 74,
    name: "文心快码",
    category: "code",
    tags: ["国产", "免费", "大厂"],
    description: "百度出品，基于文心大模型，支持多种编程语言",
    url: "https://cloud.baidu.com",
    views: 16937462
  },
  {
    id: 75,
    name: "CodeBuddy",
    category: "code",
    tags: ["国产", "免费", "大厂"],
    description: "腾讯云AI编程助手，基于混元大模型",
    url: "https://cloud.tencent.com/codebuddy",
    views: 14847392
  },
  {
    id: 76,
    name: "Trae",
    category: "code",
    tags: ["国产", "免费", "独立开发"],
    description: "字节跳动AI编程工具，国产Cursor，对开发者免费",
    url: "https://www.trae.com.cn",
    views: 12847392
  },
  {
    id: 77,
    name: "Windsurf",
    category: "code",
    tags: ["海外", "付费", "独立开发"],
    description: "AI原生IDE，编辑器内连续协作体验",
    url: "https://windsurf.com",
    views: 15847392
  },
  {
    id: 78,
    name: "Tabnine",
    category: "code",
    tags: ["海外", "付费", "独立开发"],
    description: "企业级AI代码补全，数据安全合规要求高",
    url: "https://www.tabnine.com",
    views: 9847392
  },
  {
    id: 79,
    name: "JetBrains AI",
    category: "code",
    tags: ["海外", "付费", "大厂"],
    description: "JetBrains全系列IDE的AI助手，深度集成",
    url: "https://www.jetbrains.com/ai",
    views: 7846293
  },
  {
    id: 80,
    name: "CodeWhisperer",
    category: "code",
    tags: ["海外", "免费", "大厂"],
    description: "AWS出品，Amazon Q开发者工具的一部分",
    url: "https://aws.amazon.com/codewhisperer",
    views: 6847392
  },

  // ========== AI搜索 ==========
  {
    id: 81,
    name: "夸克",
    category: "search",
    tags: ["国产", "免费", "大厂"],
    description: "阿里旗下AI浏览器，智能搜索+AI助手，移动端体验好",
    url: "https://www.quark.cn",
    views: 54763928
  },
  {
    id: 82,
    name: "百度AI搜索",
    category: "search",
    tags: ["国产", "免费", "大厂"],
    description: "百度搜索AI版，智能创作+思路启发+AI阅读",
    url: "https://chat.baidu.com",
    views: 46473928
  },
  {
    id: 83,
    name: "纳米AI搜索",
    category: "search",
    tags: ["国产", "免费", "大厂"],
    description: "360出品，多模态内容创作引擎，搜索+生成一体化",
    url: "https://www.nani.com",
    views: 28937462
  },
  {
    id: 84,
    name: "Perplexity",
    category: "search",
    tags: ["海外", "免费", "独立开发"],
    description: "AI搜索神器，实时联网，答案带引用，学术研究必备",
    url: "https://www.perplexity.ai",
    views: 32847392
  },
  {
    id: 85,
    name: "秘塔AI搜索",
    category: "search",
    tags: ["国产", "免费", "独立开发"],
    description: "国产AI搜索，无广告直达结果，学术研究友好",
    url: "https://metaso.cn",
    views: 19247837
  },
  {
    id: 86,
    name: "天工AI搜索",
    category: "search",
    tags: ["国产", "免费", "大厂"],
    description: "昆仑万维出品，AI搜索+对话一体",
    url: "https://www.tiangong.cn",
    views: 12847392
  },
  {
    id: 87,
    name: "漏刻AI",
    category: "search",
    tags: ["国产", "免费", "独立开发"],
    description: "AI搜索引擎，专注中文内容",
    url: "https://www.louke.ai",
    views: 7846293
  },

  // ========== AI写作/内容 ==========
  {
    id: 88,
    name: "蛙蛙写作",
    category: "writing",
    tags: ["国产", "免费", "独立开发"],
    description: "专为小说创作者打造的AI写作PC客户端软件",
    url: "https://www.wawawrite.com",
    views: 16847392
  },
  {
    id: 89,
    name: "白日梦",
    category: "writing",
    tags: ["国产", "免费", "独立开发"],
    description: "AI图文创作智能体，支持生成、排版、编辑、发布",
    url: "https://www.bairimeng.com",
    views: 9847392
  },
  {
    id: 90,
    name: "笔灵AI",
    category: "writing",
    tags: ["国产", "免费", "独立开发"],
    description: "AI写作工具，支持论文、文案、小说等多种文体",
    url: "https://ibiling.cn",
    views: 7846293
  },
  {
    id: 91,
    name: "讯飞绘文",
    category: "writing",
    tags: ["国产", "免费", "大厂"],
    description: "科大讯飞AI写作助手，专注内容创作",
    url: "https://huixue.xfyun.cn",
    views: 5847392
  },
  {
    id: 92,
    name: "完美邮件",
    category: "writing",
    tags: ["海外", "付费"],
    description: "AI邮件撰写工具，支持多语言和专业模板",
    url: "https://www.ultramail.ai",
    views: 3847293
  },
  {
    id: 93,
    name: "CopyMonkey",
    category: "writing",
    tags: ["国产", "付费"],
    description: "AI驱动的亚马逊列表优化专家",
    url: "https://www.copymonkey.ai",
    views: 4847293
  },

  // ========== AI音乐 ==========
  {
    id: 94,
    name: "网易天音",
    category: "music",
    tags: ["国产", "免费", "大厂"],
    description: "网易出品，AI音乐创作，一键生成歌曲，支持歌词创作",
    url: "https://tianyin.163.com",
    views: 19847293
  },
  {
    id: 95,
    name: "Suno",
    category: "music",
    tags: ["海外", "免费", "独立开发"],
    description: "全球最强AI音乐生成，输入文字即可创作完整歌曲",
    url: "https://suno.com",
    views: 29247837
  },
  {
    id: 96,
    name: "天工音乐",
    category: "music",
    tags: ["国产", "免费", "大厂"],
    description: "昆仑万维出品，支持词曲生成，适合短视频BGM",
    url: "https://music.tiangong.cn",
    views: 16937462
  },
  {
    id: 97,
    name: "腾讯音乐AI",
    category: "music",
    tags: ["国产", "免费", "大厂"],
    description: "腾讯音乐旗下AI作曲工具，支持多种风格",
    url: "https://y.qq.com/vemus/",
    views: 8928374
  },
  {
    id: 98,
    name: "讯飞音乐",
    category: "music",
    tags: ["国产", "免费", "大厂"],
    description: "科大讯飞AI音乐创作平台",
    url: "https://www.iflytekmusic.com/",
    views: 5847293
  },
  {
    id: 99,
    name: "Vocaloid",
    category: "music",
    tags: ["海外", "付费"],
    description: "雅马哈AI语音合成软件，虚拟歌手制作",
    url: "https://www.vocaloid.com",
    views: 6847392
  },

  // ========== AI数字人 ==========
  {
    id: 100,
    name: "万兴播爆",
    category: "digital",
    tags: ["国产", "付费", "大厂"],
    description: "万兴科技出品，AIGC真人短视频出海营销神器",
    views: 25928374
  },
  {
    id: 101,
    name: "腾讯智影",
    category: "digital",
    tags: ["国产", "免费", "大厂"],
    description: "数字人+配音+剪辑，电商带货场景强，一站式",
    url: "https://zenvideo.qq.com",
    views: 27837462
  },
  {
    id: 102,
    name: "HeyGen",
    category: "digital",
    tags: ["海外", "付费", "独立开发"],
    description: "数字人视频首选，画质逼真，口型准确，跨境电商必备",
    url: "https://www.heygen.com",
    views: 28746392
  },
  {
    id: 103,
    name: "怪兽AI数字人",
    category: "digital",
    tags: ["国产", "付费", "独立开发"],
    description: "怪兽智能科技出品，支持直播和短视频数字人",
    url: "https://www.guai.ai",
    views: 19283746
  },
  {
    id: 104,
    name: "硅基数字人",
    category: "digital",
    tags: ["国产", "付费", "独立开发"],
    description: "数字人直播解决方案，支持多平台",
    url: "https://www.guiji.ai",
    views: 16837462
  },
  {
    id: 105,
    name: "出境妙",
    category: "digital",
    tags: ["国产", "免费", "独立开发"],
    description: "AI数字人制作平台，支持多种风格",
    url: "https://www.chujingmiao.com",
    views: 8846293
  },
  {
    id: 106,
    name: " Synthesia",
    category: "digital",
    tags: ["海外", "付费"],
    description: "AI数字人视频制作平台，企业培训首选",
    url: "https://www.synthesia.io",
    views: 15847392
  },

  // ========== AI云服务/模型平台 ==========
  {
    id: 107,
    name: "MiniMax",
    category: "model",
    tags: ["国产", "免费", "大厂"],
    description: "国内领先AI大模型服务商，M2.7旗舰模型性价比高",
    url: "https://www.minimax.io",
    views: 22847392
  },
  {
    id: 108,
    name: "硅基流动",
    category: "model",
    tags: ["国产", "免费", "独立开发"],
    description: "AI模型云服务平台，集成多种国产大模型API",
    url: "https://www.siliconflow.cn",
    views: 16847293
  },
  {
    id: 109,
    name: "阿里云",
    category: "model",
    tags: ["国产", "付费", "大厂"],
    description: "阿里云AI产品矩阵，通义大模型、PAI机器学习等",
    url: "https://www.aliyun.com",
    views: 38476392
  },
  {
    id: 110,
    name: "腾讯云",
    category: "model",
    tags: ["国产", "付费", "大厂"],
    description: "腾讯云AI服务，混元大模型、AI智能体等",
    url: "https://cloud.tencent.com",
    views: 32458937
  },
  {
    id: 111,
    name: "百度智能云",
    category: "model",
    tags: ["国产", "付费", "大厂"],
    description: "百度云AI能力，文心大模型、智能云千帆平台",
    url: "https://cloud.baidu.com",
    views: 28473647
  },
  {
    id: 112,
    name: "华为云",
    category: "model",
    tags: ["国产", "付费", "大厂"],
    description: "华为云AI服务，盘古大模型、ModelArts开发平台",
    url: "https://www.huaweicloud.com",
    views: 24847392
  },
  {
    id: 113,
    name: "火山引擎",
    category: "model",
    tags: ["国产", "付费", "大厂"],
    description: "字节跳动云服务，豆包大模型、扣子Coze",
    url: "https://www.volcengine.com",
    views: 22847392
  },
  {
    id: 114,
    name: "量悟智能",
    category: "model",
    tags: ["国产", "免费", "独立开发"],
    description: "AI模型聚合平台，一个接口调用多个模型",
    url: "https://liangwu.ai",
    views: 9847392
  },

  // ========== AI效率工具/其他 ==========
  {
    id: 115,
    name: "Monica",
    category: "tool",
    tags: ["海外", "免费", "独立开发"],
    description: "AI助手Chrome扩展，支持聊天、搜索、写作",
    url: "https://monica.im",
    views: 22847392
  },
  {
    id: 116,
    name: "共享日历",
    category: "tool",
    tags: ["国产", "免费", "独立开发"],
    description: "AI智能日历管理，自动安排会议和时间",
    url: "https://calendar.ai",
    views: 7846293
  },
  {
    id: 117,
    name: "Otter.ai",
    category: "tool",
    tags: ["海外", "付费"],
    description: "AI会议记录助手，实时转录和总结",
    url: "https://otter.ai",
    views: 12847392
  },
  {
    id: 118,
    name: "Grammarly",
    category: "tool",
    tags: ["海外", "免费"],
    description: "AI写作助手，语法检查、文案润色",
    url: "https://www.grammarly.com",
    views: 29847392
  },
  {
    id: 119,
    name: "Canva",
    category: "tool",
    tags: ["海外", "免费", "独立开发"],
    description: "AI设计平台，PPT、海报、社交媒体图一键生成",
    url: "https://www.canva.com",
    views: 42847392
  },
  {
    id: 120,
    name: "妙办画板",
    category: "tool",
    tags: ["国产", "免费", "独立开发"],
    description: "AI思维导图和流程图工具",
    url: "https://miaoban.cn",
    views: 6847293
  },
  {
    id: 121,
    name: "ProcessOn",
    category: "tool",
    tags: ["国产", "免费", "独立开发"],
    description: "在线思维导图和流程图工具，AI辅助",
    url: "https://www.processon.com",
    views: 12847392
  },
  {
    id: 122,
    name: "美图AI",
    category: "tool",
    tags: ["国产", "免费", "大厂"],
    description: "美图秀秀AI工具集，图片处理+生成",
    url: "https://ai.meitu.com",
    views: 24847392
  }
];

// 导出数据
window.AI_TOOLS = AI_TOOLS;