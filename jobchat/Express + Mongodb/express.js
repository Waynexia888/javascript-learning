// Express + Mongodb
// Express + Mongodb 开发web后台接口
// - Express开发web接口
// - 非关系型数据库mongodb
// - 使用node.js的mongoose模块链接和操作mongodb

//-------------------------------------------------------------------
// Express
// - 基于node.js,快速,开放,极简的web开发框架
// - npm install express --save 安装express
// - hello world 应用
// - 监听路由和响应内容， 使用modemon自动重启 npm install -g nodemon

//-------------------------------------------------------------------
// hello world 应用，如下：
// server文件夹 -> server.js

const express = require('express')
//新建app
const app = express()

// 获取根目录，req: 请求, res: 响应
app.get('/', function(req, res){
    res.send('<h1>hello world</h1>')
})

app.get('/data', function (req, res) {
    res.json({name: 'imooc', type: 'IT'})
})

app.listen(9093, function(){
    console.log('Node app start at port 9093')
})

//-------------------------------------------------------------------

// Express 使用： （其他的特性）
// - app.get, app.post 分别开发get和post接口
// - app.use -> 在组模块里面使用
// - 代res.send, res.json, res.sendfile响应不同的内容
// - res.send 返回的是文本
// - res.json 返回的是json数据
// - res.sendfile 返回的是文件

