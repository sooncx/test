const express=require('express');
const MongoClient=require('mongodb').MongoClient;
const app=express();
//数据库地址
const url='mongodb://127.0.0.1:27017';

app.get('/',(req,res)=>{
	//链接数据库，两个参数，数据库地址和成功后的回调
	MongoClient.connect(url,(err,db)=>{
		if(err) return;
		//找到具体的数据库
		var dbase=db.db('student');
		var json =  [
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Google', url: 'https://www.google.com', type: 'en'},
        { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
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
		db.close();
	})
	res.end('hello');

})
app.listen(8989)