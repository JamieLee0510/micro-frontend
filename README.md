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

### SingleSPA架構

主要可以分為主wrapper和從page，直接用 single-spa的cli來初始化一個專案：一個主root、一個react 子app、一個vue 子app。




## IFrame

## WebComponent

## Function