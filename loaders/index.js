const fs = require('fs');
const path = require('path');
module.exports = (source) => {
    fs.writeFile('loaders/loaderSource.js', '我是通 过fs.writeFile 写入文件的内容',  function(err) {
        fs.open('loaders/loaderSource.js', 'a', (err, fd) => {
            const buf = Buffer.from(source, 'ascii');
            fs.write(fd, source.toString(), () => {})
        });
    });
    // return source;
    return source
}