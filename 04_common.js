// 引入 url 模块
var url = require('url')

// 引入 http 模块
var http = require('http')

// 用http模块创建服务

http.createServer((req, res) => {

    if (req.url !== '/favicon.ico') {
        // var result = url.parse(req.url, true)
        // console.log(result)
        const tools = require('03-tool-multiply')
        const tool = require('js-module')

        console.log(tool.sum(1,2,3), tools.multiply(1, 2, 3, 4))
    }

    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF-8'
    })

    res.write('<h1 style="color: red;">Hello NodeJS</h1>')

    res.end()
}).listen(3000)