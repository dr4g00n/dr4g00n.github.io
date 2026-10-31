# SITE_FEED — 视觉设计档案

> 个人视觉设计作品集 · 界面 / 品牌 / 编辑 / 实验
> 在线地址：<https://isec.club>

深色编辑风格的作品集网站：近黑底色 + 青柠强调色、超大号标题、编号作品网格、跑马灯与巨大页脚标语。纯静态 HTML/CSS/JS，无构建步骤、无框架、无第三方 JS 依赖。

内容即设计图：8 件作品以 16:10 大图呈现，点开进入全屏查看器，没有文章页面。

---

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

---

## 目录结构

```
.
├── index.html              # 首页：hero + 跑马灯 + 作品网格 + 索引 + 页脚
├── 404.html
├── css/
│   ├── feed.css            # 设计系统（tokens / 组件 / 灯箱 / 响应式）
│   └── fonts.css           # 自托管字体 @font-face
├── js/feed.js              # 吸顶导航、移动菜单、筛选、灯箱、揭示动画
├── images/
│   ├── works/              # 8 件作品图（1600×1000，兼作 og:image）
│   └── favicon.svg
├── lib/fonts/              # Inter / JetBrains Mono 变量字体子集
├── sitemap.xml / robots.txt
└── design/WebFeed.png       # 视觉设计参考
```

`css/main.css`、`js/src/`、`lib/` 下的旧 NexT 资源已不再被任何页面引用，仅作回滚保留。

---

## 设计规范

| Token | 值 | 用途 |
| --- | --- | --- |
| `--bg` | `#0B0B0D` | 页面底色 |
| `--fg` | `#F2F0EB` | 主文字（暖白） |
| `--lime` | `#C9F24C` | 强调色：CTA、编号、ticker、标点 |
| `--fg-dim` | `#8C8C8C` | 次级文字 |
| `--line` | `rgba(242,240,235,.09)` | 分割线 |
| `--font-sans` | Inter / Helvetica Neue | 标题与正文 |
| `--font-mono` | JetBrains Mono | 标签、编号、元信息 |

- 容器最大宽度 `1440px`，左右留白 `clamp(20px, 4vw, 56px)`
- 标题字距 `-0.045em`，行高 `0.86`；hero 标题全宽，简介绝对定位在右下
- 断点：`1100px`（hero 简介定位）、`900px`（作品单列）、`780px`（移动导航）
- 全部动效尊重 `prefers-reduced-motion`；无 JS 时内容完整可见

---

## 新增一件作品

1. 把设计图导出为 16:10（建议 1600×1000），命名为 `images/works/09-<slug>.jpg`。
2. 在 `index.html` 的 `.works` 中复制一张卡片，改 `data-img` / `data-title` / `data-meta` / `data-tags`、编号、标题、年份与标签。
3. 在 `#index` 的 `.indexlist` 中加一行，`data-open` 填新作品在卡片中的序号（从 0 开始）。
4. 同步修改两处的 `(08)` 计数，并更新 `sitemap.xml` 的 `lastmod`。

分类取值：`ui` / `brand` / `editorial` / `mobile` / `lab`（对应筛选 chips）。

---

## 交互

- 点击任意作品卡片或索引行 → 全屏查看器（← → 切换，Esc 关闭，点击背景关闭）
- 深链：`/?work=3` 直接打开第 3 件作品；`/?tag=ui` 直接套用分类筛选
- 图片支持 `loading="lazy"`、`width/height` 固定比例，避免布局抖动

---

## 部署

推送到 `master` 后 GitHub Pages 自动发布，约 1–2 分钟生效。

---

## 联系

- Email: <hello@isec.club>
- GitHub: [@dr4g00n](https://github.com/dr4g00n)
