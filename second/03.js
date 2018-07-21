const express=require('express');
const app=express();
const db=require('./db2.js');
const url=require('url');
const http=require('http');
const querystring=require('querystring');
var page;
// app.get('/getList',(req,res)=>{

// 	// db.insert('student','stu1',obj,function(err,result){
// 	// 	res.end(result+'')
// 	// })
// 	// db.delete('student','stu1',item,function(err,result){
// 	// 	res.end(result+'')
// 	// })
// 	// db.update('student','stu1',str1,str2,function(err,result){
// 	// 	res.end(result+'')
// 	// })
// 		db.search('student','student','wherestr',function(err,result){
// 				res.set('Content-type','text/plain')
// 			res.end(JSON.stringify(result)+'')
// 		})
// })
// app.listen(8989)



http.createServer((req,res)=>{
	res.writeHead(200,{
		'Content-Type':'text/plain;charset=utf8',
		"Access-Control-Allow-Origin": "*",
		// 任何域名都可以请求这个接口
		"Access-Control-Allow-Methods": "*"
		//任何方法都可以请求这个
	})
	console.log(req.url)
	// JSON.stringify()和JSON.parse()
	 if(req.url.startsWith(`/getList`)){
		page=querystring.parse(url.parse(req.url).query).page-1;
		db.search('student','student',page,function(err,result){
			res.end(JSON.stringify(result)+'')
			console.log("page=="+page)
		})
	}

}).listen(8989)