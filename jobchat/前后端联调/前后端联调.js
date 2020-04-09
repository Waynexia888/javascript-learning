// 前后端联调 -> 使用axios发送异步请求
// - 如何发送，端口不一致，使用proxy配置转发
// - axios有拦截器这个概念，统一loading处理
// - redux里使用异步数据，渲染页面

// axios
// - 简介好用的发送请求库，npm install axios --save 安装
// - Axios.interceptors设置拦截器，比如全局的loading
// - axios.get, axios.post 发送请求，返回promise对象
// - redux里获取数据， 然后dispatch即可

// 开发模式：
// 基于cookie用户验证
// - express依赖cookie-parser，需要npm install cookie-parser --save 安装
// - cookie 类似于一张身份卡，登陆后服务器端返回，你带着cookie就可以访问受限资源
// - 页cookie的管理浏览器会自动处理