module.exports.createCollection = function(db) {
    db.createCollection('userName',function(err,res){
        if(err) throw err
        console.log('Collection is created')
        process.exit()
    })
}