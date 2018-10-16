const database = require('./mongo')
console.log('x' ,)

database.
then(db => {
    return db.find()
}).then(console.log)

/// .then(db => {
//     db.find()
//     .then(() => console.log('hi there'))
// })
//.then(() => console.log('Hi there'))
