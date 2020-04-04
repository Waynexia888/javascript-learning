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

// ------------------------------------------------------------

// 函数扩展
// ES6 中函数的用法
// - 参数默认值
// - 箭头函数
// - 展开运算符

function hello(name){
    console.log(`hello ${name} !`)  // ES5
}
hello('imooc')  // 调用这个函数

const hello = (name) => {
    console.log(`hello ${name} !`)  // ES6
}
hello('imooc')  // 调用这个函数

const double = x => x * 2    // return语句只有一句的话， 可以省略大括号{}
console.log(double(5))

const hello = (name = 'imooc') => {    // 这是参数默认值
    console.log(`hello ${name}!`)
}
hello()   // hello imooc!
hello('woniu')  // hello woniu!

function hello(name1, name2) {
    console.log(name1, name2)
}
let arr = ['imooc', 'woniu123']
hello.apply(null, arr)    // imooc woniu123
hello(...arr)  //  ES6语法， 展开运算符， 相当于把arr的 [] 去掉
// ------------------------------------------------------------

// 超时调用: 在指定的毫秒数后调用函数或计算表达式, 只执行code一次
setTimeout(console.log('xxx'), 1000)  // ES5

setTimeout(() => {
    console.log('xxx')              // ES6
}, 1000)


// ------------------------------------------------------------
