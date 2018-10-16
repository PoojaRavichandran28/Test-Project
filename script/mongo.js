const index = require('/home/deepan/project/library/index.js')
const MongoClient = index.MongoClient
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/UserDB'

class Database {
  constructor(url) {
    this.url = url
    return this
  }

  static conn() {
    const dataBase = new Database(dbUrl)
    return dataBase.connect()
  }

  connect() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this)
      } else {
        MongoClient.connect(this.url, { useNewUrlParser: true }, (err, db) => {
          if (err) throw err
          console.log('Connected to mongodb')
          this.db = db.db('userDB')
          resolve(this)
        })
      }
    })
    
  }
  async find () {
    return this.db.collection('userName').find({}).toArray()
  }
}
module.exports = Database.conn()