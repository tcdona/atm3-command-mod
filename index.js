var opn = require('./opn/')
var fs = require('./fs')
var leancloud = require('./leancloud')

var confHash = fis.config.get('mod')

exports.name = 'mod';
exports.usage = 'just mod';
exports.desc = 'send mod data && open link';

exports.register = function(commander) {
    // console.log(readData())
    var thedata = readData()
    if (thedata === false) {
        return false
    }

    leancloud.put(confHash.name, readData(), function(data) {
        if (data === 'put get noproject') {
            return false
        }
        delData()
        opn('http://feng.avosapps.com/html/'+ confHash.name +'.html')

        process.exit()
    })

}

var readData = function() {
    var datapath = fs.home('__data4mod__' + confHash.name + '.js')
    if (fs.exists(datapath)) {
        return JSON.parse( fs.read(datapath) )
    }
    else {
        return false
    }
}

var delData = function() {
    var datapath = fs.home('__data4mod__' + confHash.name + '.js')
    return fs.del(datapath)
}


// var makeList = function() {
// }

// var ary2obj = function(a) {
//   var result = {}
//   lodash.each(a, function(v, k) {
//     result[v.html] = {
//         sub: v.sub,
//         mod: v.mod,
//     }
//   })
//   return result
// }

// console.log(opn)
// 上报数据后 可以删除数据了 process.env
// _.open fis 的 xdg-open

// confHash.project = path.resolve(fis.project.getProjectPath())

    // console.log(fis.config.get('mod') + '...')

// 不接受返回数据
// console.log(list)
// _.write(confHash.dist,
//     _.read( path.resolve(__dirname, 'list.html') )
//         .split('__DATA__')
//         .join(data)
//         .split('__PROJECTCONF__')
//         .join(JSON.stringify(confHash.project))
// )
