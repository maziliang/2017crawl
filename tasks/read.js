let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let debug = require('debug')('201611crawl:read');
module.exports = function(url,callback){
   request({url,encoding:null},function(err,response,body){
        if(!err && response.statusCode == 200){
            body = iconv.decode(body,'gbk');
            let $ = cheerio.load(body);
            let items = [];
            $('.keyword .list-title').each(function(){
                let $this = $(this);
                let item= {
                    name:$this.text(),
                    url:$this.attr('href')
                };
                debug('读到电影:'+item.name);
                items.push(item);
            });
            debug('读取电影完毕');
            callback(null,items);
        }else{
            callback('请求数据失败');
        }
   })
};