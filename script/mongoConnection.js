const index = require('/home/deepan/project/library/index.js')
const createCollection = require('/home/deepan/project/script/createCollection.js')
const connectionUrl = 'mongodb://localhost:27017/?database='
const dbName = 'UserDB'
function connectMongo(){
    const MongoClient = index.mongo()
    MongoClient.connect(connectionUrl + dbName, {useNewUrlParser: true},function(err,database){
        if(err) throw err
        console.log('Connected to mongodb')
        const db = database.db(dbName)
        createCollection.createCollection(db)
    })
}

connectMongo()