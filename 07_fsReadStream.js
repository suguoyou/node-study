const fs = require('fs')
// 流的方式读取文件
const fileReadStream = fs.createReadStream('index.js')
// 读取次数
let count = 0
// 保存数据
let str = ''
// 开始读取
// fileReadStream.on('data', chunk => {
//     console.log(`${++count} 接收到：${chunk.length}`)
//     str += chunk
// })
// 读取结束
// fileReadStream.on('end', () => {
//     console.log('--结束--');
//     console.log(count)
//     console.log(str)
// })
// 读取报错
// fileReadStream.on('error', error => {
//     console.log('读取失败', error)
// })

const data = 'console.log("Hello World! 我要存入数据！")';
const writeStream = fs.createWriteStream('index.js')

writeStream.write(data, 'utf8')
writeStream.end()
writeStream.on('finish', () => {
    console.log('写入完成');
})