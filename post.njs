#!/usr/local/bin/node
var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin','utf-8'));

console.log('Content-type:text/html; charset=utf-8\n');


var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient , assert = require('assert');
var url = 'mongodb://wp2016_groupN:zx753951@localhost/wp2016_groupN';


MongoClient.connect(url, function(err, db) {
    if(err){
        console.log("Connection failed");
            }
    else{
    console.log("Connected correctly to server");
    var collection = db.collection('documents');
    collection.insert(
        { username : param.nm, schoolnumber : param.schnum, cellphone : param.cell, email : param.email }
    , function(err, result) {
    if(err){
            console.log("Insertion failed");
    }
    else   {
            console.log("Inserted");
    }
                            });
    }
    db.close();
                                           });
