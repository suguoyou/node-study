let http = require('http')
let fs = require('fs')
let url = require('url')
let path = require('path')

http.createServer((req, res) => {

    // 获取响应路径
    let pathName = req.url
    // 默认加载路径
    if (pathName == '/') {
        // 默认加载首页
        pathName = 'index.html'
    }

    let extName = path.extname(pathName)

    // 过滤 /favicon.ico的请求
    if (pathName != '/favicon.ico') {
        // 获取08_webService下的index.html
        console.log('path', pathName)
        fs.readFile('./08_webService/' + pathName, (err, data) => {
            if (err) {
                console.log('404 not found');
                fs.readFile('./08_webService/404.html', (errorNotFound, dataNotFound) => {
                    if (errorNotFound) {
                        console.log(errorNotFound);
                    } else {
                        res.writeHead(200, {
                            "Content-Type": "text/html; charset='utf-8'"
                        });
                        // 读取写入文件
                        res.write(dataNotFound);
                        // 结束响应
                        res.end();
                    }
                })
                return
            } else {

                let ext = getExt(extName)
                res.writeHead(200, {
                    "Content-Type": ext + "; charset='utf-8'"
                });
                // 读取写入文件
                res.write(data);
                // 结束响应
                res.end();
            }
        })
    }
}).listen(3000)


// 获取后缀名
getExt = (extName) => {
    let data = fs.readFileSync('./08_ext.json')
    let ext = JSON.parse(data.toString())
    return ext[extName]
}