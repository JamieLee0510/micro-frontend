# MicroFrontend

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
主要可以分為主wrapper和從page


## IFrame

## WebComponent

## Function