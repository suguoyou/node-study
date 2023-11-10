let http = require('http')

// 虚拟SQL读取出来的数据
let items = ['哈哈', '呵呵', '嘿嘿']

http.createServer((req, res) => {
    // 设置跨域的域名， *代表允许任意域名跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    // 设置header类型
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    // 跨域允许的请求方式
    res.setHeader('Content-Type', 'application/json')

    console.log('log-http', req.method);
    // 判断请求
    switch (req.method) {
        // post请求时，浏览器会先发一次options请求，如果请求通过，则继续发送正式post请求
        case 'OPTIONS':
            res.statusCode = 200
            res.end()
            break
        case 'GET':
            console.log('get', req.url);
            let data = JSON.stringify(items)
            res.write(data)
            res.end()
            break
        case 'POST':
            let item = ''
            req.on('data', chunk => {
                item += chunk
            })

            req.on('end', () => {
                console.log('data', item);
                item = JSON.parse(item)
                items.push(item.item)
                let data = JSON.stringify(items)
                res.write(data)
                res.end()
            })
            break
    }
}).listen(3000)


console.log('http server is start...');
