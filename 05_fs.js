/** 
 * fs.stat 检测是文件还是目录
 * fs.mkdir 创建目录
 * fs.writeFile 创建写入文件
 * fs.appendFile 追加文件
 * fs.readFile 读取文件
 * fs.readdir 读取目录
 * fs.rename 重命名
 * fs.rmdir 删除目录
 * fs.unlink 删除文件
*/

let fs = require('fs')

// 检测是文件还是目录
// fs.stat('index.js', (error, stats) => {
//     if (error) {
//         console.log(error, '-----error')
//         return false
//     } else {
//         console.log(stats, '----stats')
//         return true
//     }
// })

// 创建文件夹
// fs.mkdir('css', (err) => {
//     if (err) {
//         console.log('err', err);
//         return false
//     } else {
//         console.log('创建文件夹成功')
//     }
// })

// 删除文件夹
// fs.rmdir('css', (err) => {
//     if (err) {
//         console.log('err', err);
//         return false
//     } else {
//         console.log('删除文件夹成功')
//     }
// })

// 写入文件（重写文件内容）
// fs.writeFile('index.js', 'Hello nodeJs', (err) => {
//     if (err) {
//         console.log('err', err)
//     } else {
//         console.log('倒入成功')
//     }
// })

// 删除文件
// fs.unlink('index.js', err => {
//     if (err) {
//         console.log(err, 'err')
//     } else {
//         console.log('删除成功')
//     }
// })

// 追加文件内容
// fs.appendFile('index.js', '添加文本内容', err => {
//     if (err) {
//         console.log(err, 'err')
//     } else {
//         console.log('追加内容成功')
//     }
// })

// 读取目录
// fs.readdir('node_modules', (err, data) => {
//     if (err) {
//         console.log('读取目录失败', err)
//     } else {
//         console.log('读取目录成功', data);
//     }
// })

// 读取内容
// fs.readFile('index.js', (err, data) => {
//         if (err) {
//             console.log('读取内容失败', err)
//         } else {
//             console.log('读取内容成功', data);
//         }
// })

// 重命名
fs.rename('index.js', 'indexReset.js', err => {
    if (err) {
        console.log('重命名失败', err);
    } else {
        console.log('重命名成功')
    }
})