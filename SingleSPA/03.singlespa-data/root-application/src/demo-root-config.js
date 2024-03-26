import { registerApplication, start } from "single-spa";

// 全局共享狀態與函數
const globalState = {
    count: 2,
};

function modifyCount(num) {
    globalState.count += num;
    console.log(`Current count is ${globalState.count}`);
}

// 直接在首页添加链接
if (location.pathname === "/") {
    document.body.innerHTML += `
    <main>
      <div><a href="/">Root</a></div>
      <div><a href="/react-page">Go to React</a></div>
      <div><a href="/vue-page">Go to Vue</a></div>
    </main>
  `;
}

registerApplication({
    name: "@demo/react-spa",
    app: () => System.import("@demo/react-spa"),
    activeWhen: ["/react-page"],
    // 註冊全局狀態和函數
    customProps: {
        globalState,
        modifyCount,
    },
});

registerApplication({
    name: "@demo/vue-spa",
    app: () => System.import("@demo/vue-spa"),
    activeWhen: ["/vue-page"],
    // 註冊全局狀態和函數
    customProps: {
        globalState,
        modifyCount,
    },
});

start({
    urlRerouteOnly: true,
});
