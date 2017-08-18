# mongodb
mongoose连接mongodb


#### Mongoose是什么？

Mongoose是MongoDB的一个对象模型工具，是基于node-mongodb-native开发的MongoDB nodejs驱动，可以在异步的环境下执行。同时它也是针对MongoDB操作的一个对象模型库，封装了MongoDB对文档的的一些增删改查等常用方法，让NodeJS操作Mongodb数据库变得更加灵活简单。

Mongoose，因为封装了对MongoDB对文档操作的常用处理方法，可以高效的操作mongodb,同时可以理解mongoose是一个简易版的orm ，提供了类似schema定义，hook、plugin、virtual、populate等机制，让NodeJS操作Mongodb数据库变得特别简单!

以往书中往往直接上例子，混合各种库和代码，容易让人晕，必须在例子中才能知道mongoose是如何使用的，我一直认为这是不合理的，为什么我要掌握其他的知识才能学mongoose？

其实，它也仅仅是一个node模块而已。

官网：http://mongoosejs.com/


#### mongoose入门
前面我们已经认识了Mongoose，MongoDB是一个对象数据库，是用来存储数据的；Mongoose是封装了MongoDB操作的一个对象模型库,是用来操作这些数据的。


##### 1.准备

1、 安装mongoose

```
 npm install mongoose --save 
 ```
 
2、 在app.js里引用mongoose

```
var mongoose = require("mongoose");
```

3.使用"mongoose"连接数据库

```
   mongoose.connect("mongodb://user:pass@ip:port/database");
 //mongoose.connect("mongodb://localhost@127.0.0.1:27018/test");  //咱们连本地的27018端口号,test是数据库的名称。

```

说明

- user 是mongodb里用户名
- pass 是mongodb里用户对应的密码
- ip是mongodb服务器可以访问ip地址，比如本地为127.0.0.1
- port 是mongodb服务器可以访问端口，默认是27017

##### 2.测试数据库连接成功与否

