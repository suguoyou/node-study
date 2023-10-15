/**
 * 1. fs.stat 检测是文件还是目录
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建写入文件
 * 4. fs.appendFile 追加文件
 * 5. fs.readFile 读取文件
 * 6. fs.readdir 读取目录
 * 7. fs.rename 重命名
 * 8. fs.rmdir 删除目录
 * 9. fs.unlink 删除文件
 */

// 1. 判断服务器上面有没有 upload 目录，没有就创建这个目录
// 2. 找出 html 目录下面的所有的目录，然后打印出来

let fs = require('fs')

fs.stat('upload', (err, stats) => {
    if (err) {
        fs.mkdir('upload', err => {
            if (err) {
                console.log('创建文件目录upload失败')
            } else {
                console.log('创建文件目录upload成功');

            }
        })
    } else {
        console.log('---', stats.isDirectory())
        console.log('有upload目录， 可以继续操作')
    }
})

fs.readdir('html', (err, data) => {
    if (err) {
        console.log('不存在html目录文件');
    } else {
        // console.log('html目录：', data)
        let filesArr = [];
        (function getFile(i) {
            if (i == data.length) {
                console.log('目录：', filesArr)
                return
            }

            fs.stat('html/' + data[i], (err, stats) => {
                console.log('err', err);
                if (stats.isDirectory()) {
                    filesArr.push(data[i])
                }
                getFile(i + 1)
            })
        })(0)
    }
})