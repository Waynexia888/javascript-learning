// Redux 如何和 React一起用？
// - 把store.dispatch方法传递给组件，内部可以调用修改状态
// - Subscribe订阅render函数，每次修改都重新渲染
// - Redux相关内容，移到单独的文件index.redux.js单独管理

//----------------------------------------------------------

const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'

// action creator
export function addGun() {
    return {type: ADD_GUN}
}

export function removeGun() {
    return {type: REMOVE_GUN}
}


export function counter(state=0, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1;
        case REMOVE_GUN:
            return state - 1;
        default:
            return 10;
    }
}

//----------------------------------------------------------

// 处理异步，调试工具， 更优雅的和react结合
// - redux处理异步，需要redux-thunk插件
// - npm install redux-devtools-extension 并且开启
// - 使用react-redux优雅的连接react和redux

//----------------------------------------------------------

// 计算机领域中的同步（ Synchronous） 和异步（ Asynchronous）
// - 同步就是整个处理过程顺序执行， 当各个过程都执行完毕， 并返回结果。 
//   是一种线性执行的方式， 执行的流程不能跨越。 一般用于流程性比较强的程序， 
//   比如用户登录， 需要对用户验证完成后才能登录系统。
// - 异步则是只是发送了调用的指令， 调用者无需等待被调用的方法完全执行完毕； 
//   而是继续执行下面的流程。 是一种并行处理的方式， 不必等待一个程序执行完， 
//   可以执行其它的任务， 比如页面数据加载过程， 不需要等所有数据获取后再显示页面。
// - 他们的区别就在于一个需要等待， 一个不需要等待， 在部分情况下， 我们的项目开发
//   中都会优先选择不需要等待的异步交互方式， 比如日志记录就可以使用异步方式
//   进行保存。

//----------------------------------------------------------

// 处理异步：
// - redux默认只处理同步，异步任务需要react-thunk中间件
// - npm install redux-thunk --save 
// - 使用applyMiddleware开启thunk中间件
// - action可以返回函数，使用dispatch提交action

//----------------------------------------------------------
// 调试工具：chrome搜索redux安装
// - 新建store的时候判断window.__REDUX_DEVTOOLS_EXTENSION__
// - 使用compose结合thunk和window.__REDUX_DEVTOOLS_EXTENSION__
// - 调试窗的redux选项卡，实时看到state

//----------------------------------------------------------

// 使用react-redux：
// - npm install react-redux --save
// - 忘记subscribe， 记住reducer， action 和 dispatch即可
// - react-redux 提供Provider 和 connect两个接口来连接

// react-redux具体使用：
// - Provider组件在应用最外层，传入store即可，只用一次
// - Connect 负责从外部获取组件需要的参数
// - Connect 可以用装饰器的方式来写
