const Connection = require('./connections')
const mongoDbUrl = 'mongodb://localhost:27017/?dbName='
const mongoConnect = new Connection(mongoDbUrl)
const redisConnect = new Connection()

mongoConnect.mongo('myDB').then(console.log('Connected to MongoDB'))
redisConnect.redis().then(console.log('Connected to Redis'))

