// 作用域： scope
// let 和 const
// - 定义变量使用let代替var
// - const 定义不可修改的变量
// - 作用域 和 {}

{
    var name = 'imooc' // 没问题
    let name = 'imooc'  // 会报错， name is not defined
}

console.log(name)

// ------------------------------------------------------------

const name = 'imooc'
name = 'woniu'
console.log(name)
// 会报错，typeerror: assignment to constant variable

// ------------------------------------------------------------

let name = 'imooc'
name = 'woniu'
console.log(name)
// 没问题

// ------------------------------------------------------------

// 字符串 string
// 模版字符出纳：
// - 使用反引号，直接写变量
// - 多行字符串
// - 告别 + 拼接字符串


name = 'imooc'
course = 'react开发app'
console.log('hello ' + name + ', course is ' + course )
console.log(`hello ${name}, course is ${course}`) // es6 语法

