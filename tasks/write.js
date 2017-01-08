let Movie = require('../model').Movie;
let debug = require('debug')('201611crawl:write');
let async = require('async');
module.exports = function(items,callback){
  Movie.remove({},function(){
      async.forEach(items,function(item,cb){
          Movie.create(item,function(err,result){
              debug('保存电影:'+item.name);
              cb();
          })
      },function(){
          debug('电影保存完毕');
          callback();
      });
  })

};