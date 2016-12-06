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
        { username : param.nm, schoolnumber : param.schnum, cellphone : param.cell, email : param.email,  kgs1 : param.kgs1,  kgs2 : param.kgs2,  kgs3 : param.kgs3,  kgs4 : param.kgs4,  kgs5 : param.kgs5,  kgs6 : param.kgs6}
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

