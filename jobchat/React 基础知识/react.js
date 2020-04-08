// React 是什么？
// - 帮助你构建UI的库
// - 专注于view层
// - 一切皆组件

//-------------------------------------------------------------------
// React基础语法：
// - import React
// - class 语法新建组件， render里直接使用
// - render函数返回值就是输出JSX语法，会把JSX转成js执行
// - 对组件间通信通过属性传递

// React的View层语法：
// - js里直接写html
// - Class要写成className
// - 变量用{}包裹即可

//-------------------------------------------------------------------
// rcc 快捷键
import React, { Component } from 'react'

class App extends Component {
    render() {
        const country = 'China'
        return (
            <div>
                hello, {country}
            </div>
        )
    }
}

export default App;

//-------------------------------------------------------------------
// 组件之间用props传递数据：
// - 使用<组件 数据= “值” > 的形式传递
// - 组件里使用this.props获取值
// - 如果组件只有render函数，还可以用函数的形式写组件

//-------------------------------------------------------------------

// 组件内部通过state管理状态：
// - JSX 本质就是js，所以直接数组.map渲染列表
// - Constructor设置初始状态，记得执行super(props)
// - 如果state就是一个不可变的对象，使用this.state获取

//-------------------------------------------------------------------

// onclick点击事件：
// - JSX里， onClick={this.函数名}来绑定事件
// - this引用的问题，需要在构造函数里用bind绑定this
// - this.setState修改state，记得返回新的state，而不是修改

//-------------------------------------------------------------------
// React生命周期： 
// React组件有若干个钩子函数，在组件不同的状态执行
// - 初始化周期
// - 组件重新渲染生命周期
// - 组件卸载生命周期

//-------------------------------------------------------------------
// antd-mobile UI 组件库：
// - https: //mobile.ant.design/docs/react/introduce
// - 使用 npm install antd-mobile --save 安装最新版







