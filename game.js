// game.js - TikTok 小游戏入口
const { windowWidth, windowHeight } = tt.getSystemInfoSync();

// 创建 WebView 加载本地的 game.html
const webview = tt.createWebView({
    url: 'game.html',
    left: 0,
    top: 0,
    width: windowWidth,
    height: windowHeight
});

webview.onLoad(() => {
    console.log('游戏页面加载成功');
});

webview.onError((res) => {
    console.error('WebView 错误:', res.errMsg);
});