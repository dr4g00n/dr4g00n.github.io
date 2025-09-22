```markdown
# 🤖 NPC-AI 技术博客 / NPC-AI Tech Blog
> AI 技术分享与知识交流 | AI Technology Sharing & Knowledge Exchange

🔗 在线地址：[https://npc-ai.com](https://npc-ai.com)

---

## 📌 项目简介
这是一个专注于 AI 技术分享的静态博客网站，采用现代化设计和左侧导航栏布局：

- 🤖 AI 技术文章与教程
- 💡 机器学习实践经验
- 🛠️ 开源项目展示
- 📚 技术知识整理
- 🎯 NPC 人工智能技术洞察

---

## 🚀 快速开始（本地预览）
```bash
# 1. 克隆到本地
git clone https://github.com/your-username/npc-ai.github.io.git
cd npc-ai.github.io

# 2. 启动本地服务器（任选其一）
python3 -m http.server 8080
# npx serve -p 8080
# pnpm dlx serve -p 8080
```

浏览器访问 [http://localhost:8080](http://localhost:8080)

---

📁 目录结构

```
.
├── index.html          # 首页（左侧导航栏 + 主内容区）
├── css/                # 样式文件
│   └── main.css        # 主样式（包含左侧导航栏样式）
├── js/                 # JavaScript 功能
│   ├── src/            # 源代码
│   └── lib/            # 第三方库
├── images/             # 图片资源
├── lib/                # 第三方依赖库
│   ├── font-awesome/   # 图标库
│   ├── jquery/         # jQuery
│   └── ...
├── 2017/               # 博客文章按年份归档
├── archives/           # 文章归档页面
└── CNAME               # 自定义域名配置
```

---

🎨 技术栈与特色
- **前端**: HTML5 + CSS3 + Vanilla JS + jQuery
- **设计**:
  - 🎯 左侧固定导航栏设计
  - 🎨 青绿色 (#0ba6ab) 主题配色
  - 📱 响应式布局（适配移动端）
  - ✨ 悬停动画效果
- **图标**: Font Awesome 图标库
- **部署**: GitHub Pages（自动部署）
- **性能**: 静态生成，加载快速

---

📋 新增一篇博客
1. 在 `2017/` 目录下按日期结构创建文章：
   ```
   2017/mm/dd/文章标题/index.html
   ```

2. 文章格式要求：
   - 使用 HTML 格式（Hexo 生成）
   - 包含完整的 meta 信息
   - 添加青绿色主题样式
   - 遵循现有文章结构

3. 提交更改：
   ```bash
   git add .
   git commit -m "新增文章：文章标题"
   git push origin master
   ```

4. GitHub Pages 会自动部署更新（约 1-2 分钟）

---

📬 联系方式
- 📧 邮箱：contact@npc-ai.com
- 🐙 GitHub：[@npc-ai](https://github.com/npc-ai)
- 🐦 Twitter：[@npc_ai_tech](https://twitter.com/npc_ai_tech)（可选）
- 💼 LinkedIn：[NPC-AI](https://linkedin.com/company/npc-ai)

---

🤝 贡献 & 反馈
欢迎提 [Issue](https://github.com/npc-ai/npc-ai.github.io/issues) 或 [Pull Request](https://github.com/npc-ai/npc-ai.github.io/pulls)。

## 🔄 最近更新
- **2024.09**: 重新设计为 NPC-AI 主题，添加左侧导航栏
- **品牌升级**: iSEC CLUB → NPC-AI
- **视觉优化**: 采用青绿色 (#0ba6ab) 主题配色
- **交互增强**: 添加卡片式设计和悬停动画效果

---

📄 许可证
本项目基于 [MIT License](LICENSE) 开源，可自由使用、修改与再发布。

---

## 🎯 项目特色功能

### 🎨 设计亮点
- **左侧导航栏**: 固定定位，清晰的信息架构
- **青绿主题**: 专业科技感的配色方案
- **响应式设计**: 适配各种设备屏幕
- **交互体验**: 流畅的悬停动画效果

### 🔧 技术实现
- **静态生成**: 基于 Hexo 框架的预生成 HTML
- **现代 CSS**: 使用 Flexbox 和 CSS Grid 布局
- **图标系统**: Font Awesome 提供丰富图标
- **性能优化**: 无依赖的快速加载体验

### 📱 访问方式
- 🌐 主站: [https://npc-ai.com](https://npc-ai.com)
- 🏠 本地: `http://localhost:8080` (开发模式)
- 📦 源码: [GitHub 仓库](https://github.com/npc-ai/npc-ai.github.io)

```
