// TikTok 小游戏 Web 运行时入口
const { windowWidth, windowHeight } = tt.getSystemInfoSync();

// 创建 WebView 加载游戏主页面
const webview = tt.createWebView({
    url: 'index.html',
    left: 0,
    top: 0,
    width: windowWidth,
    height: windowHeight
});

webview.onLoad(() => {
    console.log('游戏页面加载成功');
});

webview.onError((res) => {
    console.error('WebView 加载失败', res.errMsg);
});