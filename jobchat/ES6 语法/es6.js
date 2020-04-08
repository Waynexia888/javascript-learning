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

// 对象扩展： Object 扩展
// - Object.keys, Object.values, Object.entries 
// - 对象方法简写，计算属性
// - 展开运算符（不是ES6标准， 但是babel也支持）

const onj = {name: 'imooc', course: 'react开发app'}
console.log(Object.keys(obj))  // ["name", "course"]
console.log(Object.values(obj))  // ["imooc", "react开发app"]
console.log(Object.entries(obj)) // [["name", "imooc"], ["course", "react开发app"]]

const name = 'imooc'
const obj = {}
obj[name] = 'hello imooc'
console.log(obj)   // {imooc: "hello imooc"}

// ----------------------------------------

const name = 'imooc'
const obj = {
    name: "hello1"
}
obj[name] = 'hello imooc'
console.log(obj)   // {name: "hello1", imooc: "hello imooc"}

// ----------------------------------------

const name = 'imooc'
const obj = {
    [name]: "hello1"     //计算属性
}
console.log(obj)   // {imooc: "hello1"}

// ----------------------------------------

const name = 'imooc'
const obj = {
    name,                // 相当于： name：name
    [name]: "hello1",    //计算属性
    hello2: function(){    // 这里function可以省略， 
        console.log("123")
    },
    hello3(){               // hello3 是 hello2 的一个简写
        console.log("123")
    }

}
console.log(obj)   // {name: "imooc", imooc: "hello1", hello2: f, hello3: f}

// ----------------------------------------

const obj1 = {name: 'imooc', course: 'react'}
const obj2 = {type: 'it', name: 'woniu'}
console.log({...obj1, ...obj2, date: "2020"}) 
// {name: 'woniu', course: 'react', type: 'it', date: '2020'}
// 注意，name: 'imooc' 被 name: 'woniu' 覆盖了

// ------------------------------------------------------------

// 解构赋值： 函数也可以多返回值了
// - 数组解构
// - 对象解构

const arr = ['hello', 'imooc']

// let arg1 = arr[0]
// let arg2 = arr[1]
let [arg1, arg2] = arr      // 批量赋值
console.log(arg1, '|', arg2)   // "hello" | "imooc"

const obj = { name: 'imooc', course: 'react' }
const { name, course } = obj     // 解构赋值
console.log(name, '|', course) // "imooc" | "react"

// ------------------------------------------------------------

// 类， 提供class的语法糖：
// - 是prototype的语法糖
// - extends继承
// - constructor构造函数

class MyApp{
    constructor() {
        this.name = "imooc"
    }
    sayHello(){
        console.log(`hello ${this.name} !`)
    }
}
const app = new MyApp()
app.sayHello()  // hello imooc !

// ------------------------------------------------------------

// ES6中新出现的数据结构：
// - Set， 元素不可重合
// - Map
// - Symbol

// ------------------------------------------------------------

// 模块化： ES6中自带的模块化机制，告别sea.js 和 require.js
// - import, import{}
// - export, export default
// - Node 现在还不支持， 还需要用require来加载文件】

// 例如：
// 在module1.js 文件里： export const name = 'imooc123'
//                     export function sayHello(){
//                         console.log('imooc rocks!')
//                     }

// 在es6.js 文件里： import { name, sayHello } from './module1'
//                 console.log(name)   // 'imooc123'
//                 sayHello()         // 'imooc rocks!'
//                 import * as mod1 from './module1'    // * 代表所有的模块

// ------------------------------------------------------------

// 其他：还有一些特性，虽然不在ES6的范围， 但是也被babel支持， 普遍被大家接受和使用（需要安装插件）
// - 对象扩展符， 函数绑定
// - 装饰器
// - Async await

// 其支持对象扩展符和装饰器
// - Babel-plugin-transform-object-rest-spread插件，支持扩展符号
// - 装饰器
// - Async await

// ES6其他特性
// - Promise
// - 迭代器和生成器
// - 代理Proxy

// ------------------------------------------------------------

// 数组的操作

arr = [1, 2, 3]
console.log(arr.map(function(v){      // 这是旧的写法
    return v * 2
}))

console.log(arr.map((v) => v * 2))    //ES6 新的写法， [2, 4, 6]

// 遍历数组
[1, 2, 3].forEach((value, index) => {
    console.log(value);
});

//映射新数组
arr = [1, 2, 3].map((v) => v * 2);

// 所有元素是否通过测试
[1, 2, 3, 4].every((v) => v > 3)    // return true or false

// 是否有元素通过测试
[1, 2, 3, 4].some((v) => v > 3)    // return true or false

//过滤数组
[1, 2, 3, 4, 5].filter((v) => v > 3) // 返回的是一个数组，数组里面是所有满足条件的

// 查找符合条件的元素：
arr = [{name: 'dasheng', age: 18}, {name: 'rmos', age: 1}]

// 查找索引
[1, 2, 3].indexOf(2);   // 1, 返回的是一个index

//连接数组
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
newArr = [...arr1, ...arr2]  // [1, 2, 3, 4, 5, 6]

// 数组去重
let arr = [1, 2, 3, 4, 3, 2, 1]
newArr = [...new Set(arr)]  // [1, 2, 3, 4]

// 获取列表的头head 和 尾 last
const [head, ...tail] = [1, 2, 3]
const [last, ...initial] = [1, 2, 3].reverse()

