var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27018/test',function (err) {
    if(err){
        console.log('数据库连接失败');
    }else {
        console.log('数据库连接成功');
    }
});

