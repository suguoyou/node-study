// 引入 url 模块
var url = require('url')

/**
 * Console：
 { 
   Url: [Function: Url],
    parse: [Function: urlParse], // 获取地址信息
    resolve: [Function: urlResolve], // 追加或者替换地址
    resolveObject: [Function: urlResolveObject],
    format: [Function: urlFormat], // 逆向 parse，根据地址信息获取原 url 信息
    URL: [Function: URL],
    URLSearchParams: [Function: URLSearchParams],
    domainToASCII: [Function: domainToASCII],
    domainToUnicode: [Function: domainToUnicode] 
  }
 */

// 引入 http 模块
var http = require('http')

// 用http模块创建服务

http.createServer((req, res) => {

    if (req.url !== '/favicon.ico') {
        var result = url.parse(req.url, true)
        console.log(result)
    }

    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF-8'
    })

    res.write('<h1 style="color: red;">Hello NodeJS</h1>')

    res.end()
}).listen(3000)