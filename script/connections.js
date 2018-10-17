const index = require('/home/deepan/project/library/index.js')

const MongoClient = index.MongoClient
const mongoDbUrl = 'mongodb://localhost:27017/?dbName='

const RedisClient = index.redis.createClient()

class Connection {
    constructor(url) {
        this.url = url
        this.db = undefined
        return this
    }

    static connect() {
        const connection = new Connection(mongoDbUrl)
        return connection
    }

    mongo(dbName) {
        return new Promise((resolve,reject) => {
            if(this.db) {
                resolve(this)
            } else {
                MongoClient.connect(this.url+dbName, { useNewUrlParser: true }, (err,db) => {
                    if(err) reject(err)
                    //console.log(dbName)
                    resolve(this)
                })
            }
        })
    }


    redis() {
        return new Promise((resolve,reject) => {
            RedisClient.on('connect',(err) =>{
                if(err) reject(err)
                resolve(this)
            })
        })

    }
}

module.exports = Connection.connect()