import express from 'express';
import routes from './src/routes/routes';

// const express = require('express')
const app = express();
// const routes = require('./src/routes/routes.js');

const port = 4000;


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

// database config
 const MongoClient = require('mongodb').MongoClient;

var db

// MongoClient.connect('mongodb+srv://root:root@clusterdev-dvspy.mongodb.net/test?retryWrites=true&w=majority', (err, client) => {
//   if (err) return console.log(err)
//   db = client.db('CRM') // whatever your database name is
//   app.listen(4000, () => {
//     console.log('listening on 4000')
//   })
// })


routes(app);

app.listen(port, () => console.log('server is started on port 4000'))
