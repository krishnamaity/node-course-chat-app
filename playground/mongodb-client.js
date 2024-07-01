
const MongoClient= require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
        return console.log('unable to connect mongodb server')
    }
    console.log('connected mongodb server');
    db.close();
})

