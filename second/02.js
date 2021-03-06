const express=require('express');
const MongoClient=require('mongodb').MongoClient;
const app=express();
//数据库地址
const url='mongodb://127.0.0.1:27017';

app.get('/getList',(req,res)=>{
	//获取get请求的参数req.query
	var page=req.query.page;
	//链接数据库，两个参数，数据库地址和成功后的回调
	MongoClient.connect(url,(err,db)=>{
		if(err) return;
		//找到具体的数据库
		var dbase=db.db('student');
		var json =  [
        { name: '1',age:'11'},
        { name: '2',age:'22'},
        { name: '3',age:'33'},
        { name: '4',age:'44'},
        { name: '5',age:'55'},
        { name: '6',age:'66'},
        { name: '7',age:'77'},
        { name: '8',age:'88'},
        { name: '9',age:'99'}
       ];
		//插入数据 第一个参数：插入数据详情 第二个参数：
		// dbase.collection('stu1').insertMany(json,(err,result)=>{
		// 	if (err) throw err;
  //           console.log("插入的文档数量为: " + result.insertedCount);
		// })
		//查询所有数据
		// dbase.collection('stu1').find({}).toArray((err,result)=>{
		// 	if(err) return;
		// 	console.log(result);
		// 	res.end(JSON.stringify(result));
		// })
		//精确查询
		//  var whereStr = {"name":'菜鸟工具'};//查询条件
		// dbase.collection('stu1').find(whereStr).toArray((err,result)=>{
		// 	if(err) return;
		// 	console.log(result);
		// })
		// 更新符合条件的第一条数据
		// var whereStr = {"name":'菜鸟工具'};  // 查询条件
  //       var updateStr = {$set: { "url" : "https://www.1234234234.com" }};
		// dbase.collection('stu1').updateOne(whereStr,updateStr,(err,result)=>{
		// 	if(err) return;
		// 	console.log("更新成功");
		// })
		// 更新多条数据
		// var whereStr = {"name":'Google'};  // 查询条件
  //       var updateStr = {$set: { "url" : "https://www.1.com" }};
		// dbase.collection('stu1').updateMany(whereStr,updateStr,(err,result)=>{
		// 	if(err) return;
		// 	console.log("更新成功");
		// })
		// 删除数据
		 // var whereStr = {"name":'菜鸟工具'};  // 查询条件
		 // dbase.collection('stu1').deleteOne(whereStr,(err,result)=>{
		 // 	if(err) return;
		 // 	console.log('删除成功')
		 // })
		 // 删除多条数据
		 //  var whereStr = {"name":'Google'};  // 查询条件
		 // dbase.collection('stu1').deleteMany(whereStr,(err,result)=>{
		 // 	if(err) return;
		 // 	console.log('删除成功')
		 // })
		 // 排序
		  // var mysort = { type: 1 };//升序
		  // //var mysort = { type: 1 };//降序
		  // dbase.collection('stu1').find().sort(mysort).toArray((err,result)=>{
		  // 	if(err) return;
		  // 	console.log(result);
		  // })
		  // 分页
		   var mysort = { type: 1 };//升序
		   dbase.collection('stu1').find().skip(1*page).limit(1).sort(mysort).toArray((err,result)=>{
		  	if(err) return;
		  	console.log(result);
		  	res.set('Content-type','text/plain')
		  	res.end(JSON.stringify(result))
		  })
		db.close();
	})
	console.log('hello')

})
app.listen(8989)