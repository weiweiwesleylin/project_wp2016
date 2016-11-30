#!/usr/local/bin/node
var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin', 'utf-8'));

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

    var url = 'mongodb://wp2016_groupN:zx753951@localhost/wp2016_groupN';
    var insertDocuments = function(db, callback) {
      // Get the documents collection
        var collection = db.collection('documents');
          // Insert some documents
            collection.insertMany([
                {name : param.name,schoolnumber : param.schnum,cellphone : param.cell,email : param.email}
                  ], function(err, result) {
                      assert.equal(err, null);
                      assert.equal(1, result.result.n);
                      assert.equal(1, result.ops.length);
                          callback(result);
                                        });
                                        }
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
        console.log("Connected correctly to server");

           insertDocuments(db, function() {
               db.close();
                 });
                 });
~
~
