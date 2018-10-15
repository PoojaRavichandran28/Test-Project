/*function event(){
    const event = require('events')
}

function fileSystem(){
    const fileSystem = require('fs')
}

function http(){
    const http = require('http')
}

function jsdom(){
    const {JSDOM} = require('jsdom')
}
*/
module.exports.mongo = function(){
    const MongoClient = require('mongodb').MongoClient
    return MongoClient
}
/*
function path(){
    const path = require('path')
}

function process(){
    const process = require('process')
}

function redis(){
    const redis = require('redis')
}

function request(){
    const request = require('request')
}

function url(){
    const url = require('url')
}*/

//module.exports(event)
//module.exports(fileSystem)
//module.exports(http)
//module.exports(jsdom)
//module.exports(path)
//module.exports(process)
//module.exports(redis)
//module.exports(request)
//module.exports(url)
console.log(__filename)
console.log(__dirname)