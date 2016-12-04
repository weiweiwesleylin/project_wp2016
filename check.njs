#!/usr/local/bin/node
var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin','utf-8'));

console.log('Content-type:text/html; charset=utf-8\n');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://wp2016_groupN:zx753951@localhost/wp2016_groupN';

MongoClient.connect(url,function(err,db)
{
  if(err){
        console.log("Unable to connect to the server. Error:",err);
          }
  else{

        var collection = db.collection('documents');
        collection.find( { username : param.nm, schoolnumber : param.schnum},function(err,result){
        if(err){
              console.log(err);
              console.log('Login failed');

        else {
              console.log(param.account);
                                                          }

  db.close();
            });
          }
 });