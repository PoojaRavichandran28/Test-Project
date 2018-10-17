const index = require('/home/deepan/project/library/index.js')
function connect() {
    const redis = index.redis
    const RedisClient = redis.createClient()
    RedisClient.on('connect',function(err,db){
        if(err) throw err
        console.log('Connected to redis')
    })
    RedisClient.set('my test key', 'my test value', redis.print);
    RedisClient.get('my test key', function (error, result) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('GET result ->' + result);
    })
}
connect()