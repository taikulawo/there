// used when debug
var fs = require("fs")
hexo.extend.helper.register("dump",function(d,path){
    fs.writeFileAsync(d,path)
})

fs.writeFileAsync = function(d, path,override){
    return new Promise(function(resolve,reject){
        let exists = fs.existsSync(path)
        if (exists && !override){
            return
        }
        fs.writeFile(path,d,(err) => {
            if (err){
                reject(err)
            }
            resolve(err)
        })
    })
}