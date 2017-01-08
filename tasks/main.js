let async = require('async');
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let read = require('./read');
let write = require('./write');
let debug = require('debug')('201611crawl:main');

module.exports = function(){
    async.waterfall([
        function (cb) {
            read(url,cb);
        },
        function (items,cb) {
            write(items,cb)
        }
    ], function (err,result) {
        debug('全部数据处理完毕,请指示');
    });
};