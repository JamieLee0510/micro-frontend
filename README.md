# MicroFrontend
微前端想要解決的，基本是前端頁面的複用、特別是不同框架下的前端頁面。

## SingleSPA

### 基礎為SystemJS
`SingleSPA` 主要是基於 `SystemJS`，其為對不同的JS模塊在瀏覽器中進行動態加載.這是在ESM還沒有成為瀏覽器標準的時候到替代方案。

可以查看例子：`SingleSPA/01.systemjs/index.html`
使用CDN來引入 systemjs，然後監聽路由，如果是 home的話就引入`home-module.js`、如果是about的話就引入`about-module.js`，產生不同的console，基本上就算是SingeSPA的雛形，主要程式碼如下：
```
function handleRoute() {
    const path = window.location.hash.replace('#/', '');
    switch(path) {
        case 'home':
            System.import('./home-module.js')
            break;
        case 'about':
            System.import('./about-module.js')
            break;
        default:
            System.import('./home-module.js').
            break;
    }
}
```

### 極簡SingleSPA架構

主要可以分為主wrapper和其他子application。直接用 single-spa的cli來初始化一個專案：一個主root、一個react 子app、一個vue 子app。

首先，先使用 single-spa的cli 來創建 vue 和 react application

- `$ npx create-single-spa`
- 選擇 `single-spa application / parcel `
- 如果是vue的話，要注意在 `vue.config.js`中新增:
```
configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
  // other setting
```

再來是主要的root-config，初始化成功後要將上述的react-application和vue-application註冊進去

- `index.ejs`
  - 導入全局所需要的依賴（vue、react等）
```
<script type="systemjs-importmap">
    {
        "imports": {
        "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
        "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",
        "singel-spa-vue":"https://cdn.jsdelivr.net/npm/single-spa-vue@3.0.0/dist/umd/single-spa-vue.min.js",
        "vue":"https://cdn.jsdelivr.net/npm/vue@3.4.21/dist/vue.global.min.js",
        "vue-router":"https://cdn.jsdelivr.net/npm/vue-router@4.3.0/dist/vue-router.global.min.js"
        }
    }
</script>
```

  - 再來，是導入react-application和vue-application的運行路徑
  
```
<script type="systemjs-importmap">
    {
        "imports": {
        "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
        "@demo/root-config": "//localhost:9000/demo-root-config.js",
        "@demo/react-spa": "http://localhost:3031/demo-react-spa.js",
        "@demo/vue-spa": "http://localhost:3032/js/app.js"
        }
    }
</script>
```

- 接著，在`microfrontend-layout.html` 中，設定觸發的相關路由：
```
  <main>
    <route default>
      <!-- <application name="@single-spa/welcome"></application> -->
      <div><a href="/">Root</a></div>
      <div><a href="/react-page">Go to React</a></div>
      <div><a href="/vue-page">Go to Vue</a></div>
    </route>
    <route path="react-page">
      <application name="@demo/react-spa"></application>
    </route>
    <route path="vue-page">
      <application name="@demo/vue-spa"></application>
    </route>

  </main>
```
基本上就完成的最基礎的single-spa架構

### SingleSPA的數據傳遞（全局state）
SingleSPA中的各個組件，要如何共享數據呢？由於 single-spa 本身是專注於微前端模塊加載和路由管理，不直接提供狀態管理。盡量就是把數據簡單放到 Browser storage如 localStorage、sesstionStorage、cookie等；不然就是要全局windows掛載數據、函數，或者customEvent。

### SingleSPA Parcels
// TODO

### 原有專案中接入Single-SPA


## IFrame

### Desc

### 數據傳遞

## WebComponent
### Desc
Web Component主要由三項技術組成：**Custom elements**、**Shadow DOM**、**HTML templates**
- Custom elements：可以讓開發者定義自己的HTML標籤
- Shadow DOM：為web組件提供封裝的樣式和隔離，
- HTML templates：允許聲明式複用HTML（`<template>` 和 `<slot>`）

基本上是以「組件」為單位，然後可以跳脫前端框架，撰寫原生組件。所以基本上是使用Web Component暴露出來的接口和生命週期，來自己撰寫原生組件。

### MicroApp
MicroApp就是基於 webcomponent 技術的微前端框架

## Webpack Federation