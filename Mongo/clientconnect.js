// var mongo_ = require('mongodb').MongoClient
// var url = 'mongodb://localhost:27017/'
// const dbName = '7SEfall2022'
// mongo_.connect(url, function(err, client) {
//   const db = client.db(dbName);
//   if(err)
//     throw err
//   console.log('db created')  
//   client.close()
// });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/teamsdb";
// var url = "mongodb://127.0.01/teamsPSL";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
    console.log("Connected");
  db.close();
});