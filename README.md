# 立委競選官網

![image](/assets/images/home.jpg)

## 網站說明

使用 Nuxt3 開發具有 SSR 的 Vue 網頁，動畫部分以 Gsap 製作滾動特效。

Demo : https://the-f2e-mission-1.vercel.app/

## 系統說明

### 版本
使用 Node.js v18.15.0 環境下進行開發。

### 專案運行
```
npm install
npm run dev
```

## 使用技術
### 前端框架與函式庫
Nuxt3：前端開發框架，具有 SSR 以利於 SEO 優化。
GSAP：用於實現頁面滾動時的動畫效果的函式庫。

## 問題集中

### v-for 動態綁定圖片無法顯示

解決 : 新增 composables/useImg.js
