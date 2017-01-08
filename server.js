let express = require('express');
let path = require('path');
let Movie = require('./model').Movie;
let app = express();
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.get('/',function(req,res){
    Movie.find({},function(err,movies){
        res.render('index',{movies});
    });
});
app.listen(9090);

let CronJob  = require('cron').CronJob;
let main = require('./tasks/main');
let job = new CronJob('0 * * * * *',function(){
    main();
});
job.start();