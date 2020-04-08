// database config
const MongoClient = require('mongodb').MongoClient;

var db

MongoClient.connect('mongodb+srv://root:root@clusterdev-dvspy.mongodb.net/test?retryWrites=true&w=majority', (err, client) => {
  if (err) return console.log(err)
  db = client.db('CRM')
})