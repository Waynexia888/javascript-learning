// Redux是什么？ -> 专注于状态管理的库
// - Redux专注于状态管理，和react解耦
// - 单一状态，单向数据流
// - 核心概念： store，state，action，reducer

// 主要功能：
// - store（相当于保险箱），所有的状态，在那里都有记录（state）
// - 需要改变的时候，需要告诉dispatch要干什么（action）
// - 处理变化的reducer拿到state和action，生成新的state

// 正确使用方法：
// - 首先通过reducer新建store，随时通过store.getState获取状态
// - 需要状态变更，store.dispatch(action)来修改状态
// - reducer 函数接受state和action，返回新的state，可以用store.subscribe监听每次修改

//-------------------------------------------------------------------

import { createStore } from 'redux'
//这是reducer处理函数，参数是状态state和action, 生成新的state
function counter(state=0, action) {
    switch (key) {
        case value:
            return ;
            break;
        default:
            break;
    }
}

// 新建保险箱
const store = createStore(counter)
// console.log
const init = store.getState()
console.log(init)
function listener(){
    const current = store.getState()
    console.log(current)
}

//订阅，监听每次修改, 每次state修改，都会执行listener
store.subscribe(listener)

//提交状态变更的申请（派发事件，传递action）
store.dispatch({ type: '加机关枪' })
store.dispatch({ type: '减机关枪' })