const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express ();
const port = process.env.PORT || 5000;

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://alexsander:<password>@cluster0.xg7fo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.get('/home', function(req,res){
    res.json({message: 'Seja Bem-Vindo'}); 
});

app.listen(port,function(){
    console.log('server running on port ' + port)
})

