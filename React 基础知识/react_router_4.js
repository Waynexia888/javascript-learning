// React-Router5 是官方推荐路由器， 5是最新版本
// - 5是全新的版本，和之前版本不兼容，浏览器和RN均兼容
// - react开发单页应用必备，践行路由即组件的概念
// - 核心概念：动态路由， Route，Link， Switch

//---------------------------------------------------------
// 初识Route5
// - npm install react-router-dom
// - 官方文档： https: //reacttraining.com/react-router/web/guides/quick-start
// - Route4使用react-router-dom作为浏览器的路由

// 入门组件：
// - BrowserRouter, 包裹整个应用
// - Router 路由对应渲染的组件，可嵌套
// - Link跳转专用 ->点击跳到指定路由
// - exact表明完全匹配

//其他组件：
// - url参数，Route组件参数可用冒号标识参数
// - Redirect组件 -> 页面一刷新，直接跳转到指定路径
// - Switch只渲染命中的第一个Route组件

// - this.props.history.push('/'); //直接跳转到'/'路径
// - <Redirect to='/'></Redirect>


