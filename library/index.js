module.exports.event = function(){
    const event = require('events')
    return event
}

module.exports.fileSystem = function(){
    const fileSystem = require('fs')
    return fileSystem
}

module.exports.http = function(){
    const http = require('http')
    return http
}

module.exports.jsdom = function(){
    const {JSDOM} = require('jsdom')
    return {JSDOM}
}

module.exports.mongo = function(){
    const MongoClient = require('mongodb').MongoClient
    return MongoClient
}

module.exports.path = function(){
    const path = require('path')
    return path
}

module.exports.proccess = function(){
    const process = require('process')
    return process
}

module.exports.redis = function(){
    const redis = require('redis')
    return redis
}

module.exports.request = function(){
    const request = require('request')
    return request
}

module.exports.url = function(){
    const url = require('url')
    return url
}