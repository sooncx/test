var MongoClient = require('mongodb').MongoClient;
const http=require('http');
var url = "mongodb://localhost:27017/";
function _connect(callback){
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  callback(err,db)
	  db.close();
	});
}

exports.insert=function(dbase,collectionname,myobj,callback){
	_connect(function(a,db){
		db.db(dbase).collection(collectionname).insertOne(myobj,function(err,result){
			if(err) return;
			console.log('文档插入成功') ;
			callback(err,result)
			db.close();
		})
	})
}

exports.delete=function(dbase,collectionname,myitem,callback){
	_connect(function(a,db){
		db.db(dbase).collection(collectionname).deleteOne(myitem,function(err,result){
			if(err) return;
			console.log('文档删除成功');
			callback(err,result)
			db.close();
		})
	})
}

exports.update=function(dbase,collectionname,mystr,newstr,callback){
	_connect(function(a,db){
		db.db(dbase).collection(collectionname).updateOne(mystr,newstr,function(err,result){
			if(err) return;
			console.log('文档更新成功');
			callback(err,result)
			db.close();
		})
	})
}

exports.search=function(dbase,collectionname,page,callback){
	_connect(function(a,db){
		db.db(dbase).collection(collectionname).find().skip(1*page).limit(1).toArray(function(err,result){
			if(err) return;
			console.log('文档查找成功');
			console.log(collectionname)
			callback(err,result)
			db.close();
		})
	})
}



