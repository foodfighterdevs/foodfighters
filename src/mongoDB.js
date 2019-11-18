const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const userName = "Danny";
const passWord = "123";

// Connection URL
// const url = 'mongodb://localhost:27017'; //This current line here is for connecting to local database.


//Used connection strings provided by server to connect to cloud service/MongoDB
const url = 'mongodb+srv://jphang27:Helloworld12%21@foodfighters-s1ibc.mongodb.net/test?retryWrites=true&w=majority'

// Database Name
const dbName = 'foodfighters_DB';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection("Users' Accounts"); //Collection of your DB
  console.log(collection.collectionName.toString()); //Grab the name. Test

  collection.insertOne(
    {   
      username: userName,
      password: passWord
    }
  )


  client.close();
});