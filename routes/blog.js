/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-1-23
 * Time: 下午9:02
 * To change this template use File | Settings | File Templates.
 */

var BlogDao=require("../Dao/BlogDao"),
    Blog=require("../models/Blog");
exports.list = function(req, res){
//    BlogDao.create(new Blog({title:"njblog"+Math.random()*1000,content:"miao love node"}),function(error){
//        console.log(error);
//    })
//    BlogDao.getAll(function(err,data){
//        console.log(data[1].title);
//    })
    res.send("all blogs");
};