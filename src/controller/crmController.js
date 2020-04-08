// import '../../config';

// create database connection
const MongoClient = require('mongodb').MongoClient
var db
const uri = 'mongodb+srv://root:root@clusterdev-dvspy.mongodb.net/test?retryWrites=true&w=majority'

MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client.db('CRM') // whatever your database name is
})


export const addContact = (req,res) => {
    console.log(req.body);

    db.collection('Contact').insertOne(req.body, (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database')
        //res.redirect('/')
        
    })   
    var response = {
        status: 200,
        body : req.body
    } 
        res.send(response);
}

export const getAllContacts = (req,res) => {
  
    var data = db.collection('Contact').find();
    data.toArray((err,results) => {
        console.log(results);
        res.send(results);
    })

}

export const getContact = (req,res) => {
    var contact_id = req.params.id
    console.log(contact_id);
    var data = db.collection('Contact').find({firstname : contact_id});
    data.toArray((err,results) => {

        console.log(results.length);
        if (results.length > 0) res.send(results)
        else {
            var err_response = {status : 200, message : 'No records found for firstname ' + contact_id}
            res.send(err_response)
        }
        
    })
}

export const deleteContact = (req,res) => {
    console.log(req.body);
    var response = {
        status: 200,
        body : req.body
    }
    res.send(response);
}