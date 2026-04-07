// TikTok 小游戏 Web 运行时入口 - 使用 iframe 加载游戏主页面
const { windowWidth, windowHeight } = tt.getSystemInfoSync();

// 创建一个全屏 iframe
const iframe = document.createElement('iframe');
iframe.src = 'index.html';
iframe.style.position = 'fixed';
iframe.style.top = '0';
iframe.style.left = '0';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none';
iframe.style.margin = '0';
iframe.style.padding = '0';

// 清除页面默认样式
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.overflow = 'hidden';

// 将 iframe 添加到页面
document.body.appendChild(iframe);

iframe.onload = () => {
    console.log('游戏页面加载成功');
};

iframe.onerror = (err) => {
    console.error('iframe 加载失败', err);
};
