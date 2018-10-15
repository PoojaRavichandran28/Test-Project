const index = require('./library/index.js')
//const MongoClient = require('mongodb').MongoClient
const connectionUrl = 'mongodb://localhost:27017/?database='
const dbName = 'UserDB'
function connect(){
    const MongoClient = index.mongo()
    MongoClient.connect(connectionUrl + dbName, {useNewUrlParser: true},function(err,db){
        if(err) throw err
        console.log('connected')
    })
}

connect()
