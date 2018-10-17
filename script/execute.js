const connections = require('./connections')
connections.mongo('UserDB').then(console.log('Connected to MongoDB'))
connections.redis().then(console.log('Connected to Redis'))