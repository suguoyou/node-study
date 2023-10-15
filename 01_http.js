var http = require('http')
/**
 * 
 * req 获取url信息（request）
 * res 浏览器返回相应信息（response）
 */

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF-8'
    })
    console.log(req, 'req')

    res.write('<h1>Hello NodeJs</h1>')

    res.end()
}).listen(3000)