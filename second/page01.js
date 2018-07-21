// const http=require('http');
// const querystring=require('querystring');
// const fs=require('fs');
// const express=require('express');
// const MongoClient=require('mongodb').MongoClient;
// const app=express();
// //数据库地址
// const url='mongodb://127.0.0.1:27017';

// app.get('/getList',(req,res)=>{
// 	//获取get请求的参数req.query
// 	var page=req.query.page;
// 	//链接数据库，两个参数，数据库地址和成功后的回调
// 	MongoClient.connect(url,(err,db)=>{
// 		if(err) return;
// 		//找到具体的数据库
// 		var dbase=db.db('student');
// 		var list={
// 			a:[
//     		    { name: '1',age:'11'},
//     		    { name: '2',age:'22'},
//     		    { name: '3',age:'33'},
//     		    { name: '4',age:'44'},
//     		    { name: '5',age:'55'},
//     		    { name: '6',age:'66'},
//     		    { name: '7',age:'77'},
//     		    { name: '8',age:'88'},
//     		    { name: '9',age:'99'}
//     		   ]
// 		}
//})

// })
// app.listen(8989)



const express=require('express');
const app=express();
const db=require('./db2.js');
app.get('/getList',(req,res)=>{

	// db.insert('student','stu1',obj,function(err,result){
	// 	res.end(result+'')
	// })
	// db.delete('student','stu1',item,function(err,result){
	// 	res.end(result+'')
	// })
	// db.update('student','stu1',str1,str2,function(err,result){
	// 	res.end(result+'')
	// })
		db.search('student','student','wherestr',function(err,result){
				res.set('Content-type','text/plain')
			res.end(JSON.stringify(result)+'')
		})
})
app.listen(8989)