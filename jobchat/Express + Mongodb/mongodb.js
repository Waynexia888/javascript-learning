// Mongodb + mongoose -> 非关系型数据库
// - 官网安装： https: //docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
// - npm install mongoose --save 安装mongoose
// - 通过mongoose操作mongodb， 存储的就是json， 相对于mysql来说，要易用很多

// terminal -> mongo

//-------------------------------------------------------------------
// mongoose基础使用：
// - Connect链接数据库
// - 定义文档模型， Schema和model新建模型
// - 代一个数据库文档对应一个模型,通过模型对数据库进行操作

//-------------------------------------------------------------------

// Mongoose 文档类型：
// - String, Number等数据结构
// - 定create, remove, update分别用来增，删， 改的操作
// - Find 和 findOne 用来查询数据

//-------------------------------------------------------------------

// Express + mongodb实战: 增删改查
// - mongod --config /usr/local/etc/mongod.conf --fork后台启动
// - Express结合mongodb
// - 封装mongoose

// mongoose数据模型： 增删改查
// - find, findOne 查找数据
// - update 更新数据
// - Remove 删除数据

// Express + mongodb结合：
// - mongodb独立工具函数
// - express使用body-parser 支持post参数
// - 使用cookie-parser存储登陆信息cookie


//-------------------------------------------------------------------

// server文件夹 -> server.js
// const express = require('express')
const mongoose = require('mongoose')
//  链接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
    console.log('mongo connect success')
})

// 类似于mysql的表， mongo里有文档，字段的概念
// 文档名叫user，文档模型Schema
const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String, require:true},
    age:{type:Number, require:true}
}))

// 新增数据
User.create({
    name: 'imooc',
    age: 18
}, function(err, doc){
    if (!err) {
        console.log(doc) 
    } else {
        connsole.log(err)
    }
})

// 删除 age：18 所有数据
User.remove({age:18}, function(err, doc){
    console.log(doc)
})

//更新user是xiaoming里， 把age改成26
User.update({'user':'xiaoming'}, {'$set':{age:26}}, function(err, doc){
    console.log(doc)
})


// //新建app
// const app = express()

// // 获取根目录，req: 请求, res: 响应
// app.get('/', function (req, res) {
//     res.send('<h1>hello world</h1>')
// })

// app.get('/data', function (req, res) {
    //查找数据， 查找所有的{}数据
    User.find({}, function(err, doc){
        res.json(doc)
    })
    //查找user是xiaoming的数据，返回的是一个list，list里面可能是一条对象，可能是多条对象数据，[{}, {}]
    User.find({'user': 'xiaoming'}, function (err, doc) {
        res.json(doc)
    })
    //查找user是xiaoming的数据, 找到一条就返回， 返回的是一条对象数据
    User.findOne({'user': 'xiaoming'}, function (err, doc) {
        res.json(doc)
    })

//     res.json({
//         name: 'imooc',
//         type: 'IT'
//     })
// })

// app.listen(9093, function () {
//     console.log('Node app start at port 9093')
// })
