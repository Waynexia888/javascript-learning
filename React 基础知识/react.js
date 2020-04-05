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





