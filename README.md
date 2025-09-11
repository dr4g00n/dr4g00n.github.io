```markdown
# 🌟 我的个人主页 / My Personal Site  
> 托管在 GitHub Pages，无需服务器，零成本在线。

🔗 在线地址：[https://你的用户名.github.io](https://你的用户名.github.io)

---

## 📌 项目简介
这是一个极简、响应式的静态个人网站，用于展示：

- ✏️ 技术博客  
- 🛠️ 开源项目  
- 📞 联系方式  
- 🎨 作品集 / 简历

---

## 🚀 快速开始（本地预览）
```bash
# 1. 克隆到本地
git clone https://github.com/你的用户名/你的用户名.github.io.git
cd 你的用户名.github.io

# 2. 直接打开 index.html 即可浏览
# 或使用任意静态服务器（任选其一）
python -m http.server 8000
# npx serve
# pnpm dlx serve
```

浏览器访问 [http://localhost:8000](http://localhost:8000)

---

📁 目录结构

```
.
├── index.html          # 首页
├── assets/
│   ├── css/            # 样式
│   ├── js/             # 脚本
│   └── img/            # 图片 / 头像 / 项目截图
├── posts/              # 博客文章（Markdown → HTML）
├── projects/           # 项目展示页
└── CNAME               # 自定义域名（可选）
```

---

🎨 技术栈
- HTML5 + CSS3 + Vanilla JS  
- 图标：Font Awesome / Tabler Icons  
- 部署：GitHub Pages（自动触发）

---

📋 新增一篇博客
1. 在 `posts/` 新建 `yyyy-mm-dd-标题.md`  
2. 顶部加入 YAML Front Matter：
   
```markdown
   ---
   title: 文章标题
   date: 2025-09-11
   tags: [GitHub, 前端]
   ---
   ```

3. Commit & Push 后，GitHub Pages 会自动更新。

---

📬 联系方式
- 📧 邮箱：your-email@example.com  
- 🐙 GitHub：[@你的用户名](https://github.com/你的用户名)  
- 🐦 Twitter：[@your_twitter](https://twitter.com/your_twitter)（可选）

---

🤝 贡献 & 反馈
欢迎提 [Issue](https://github.com/你的用户名/你的用户名.github.io/issues) 或 [Pull Request](https://github.com/你的用户名/你的用户名.github.io/pulls)。

---

📄 许可证
本项目基于 [MIT License](LICENSE) 开源，可自由使用、修改与再发布。

```
