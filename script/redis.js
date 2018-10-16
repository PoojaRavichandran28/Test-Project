const index = require('/home/deepan/project/library/index.js')
function connect() {
    const redis = index.redis()
    const RedisClient = redis.createClient()
    RedisClient.on('connect',function(err,db){
        if(err) throw err
        console.log('Connected to redis')
        process.exit()
    })
}
connect()