// console.log('1');

// let fs = require('fs')
// getExt = (callback) => {
//     fs.readFile('08_ext.json', (err, data) => {
//         console.log('2');
//         callback && callback(data)
//     })
// }
// getExt((result) => {
//     console.log('result', result.toString());
// })

// console.log('3');

let fs = require('fs')

/** 
 * Node 事件循环：
 * 1、Node 是单进程单线程应用程序， 但是通过事件和回调支持并发，所以性能非常高
 * 2、Node 的每一个Api都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发
 * 3、Node 有多个内置的事件，我们可以通过引入events模块，并通过实例化 EventEmitter类来绑定和监听事件
*/


let events = require('events')

let EventEmitter = new events.EventEmitter()

getExt = () => {
    fs.readFile('08_ext.json', (err, data) => {
        EventEmitter.emit('data', data.toString())
    })
}

getExt()

EventEmitter.on('data', ext => {
    console.log('on', ext);

})



