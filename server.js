const express = require('express');
const {MongoClient} = require('mongodb');

const app = express(); 

app.set('view engine', 'ejs');
const port = 3000 || 3001;

let db = '';

async function connectingToMongoDb() {
    try {
        let dbConnection = await MongoClient.connect('mongodb://localhost:27017');
        db = dbConnection.db('school');
        console.log('Connected To Db')
    }
    catch(err) {
        console.log(err)
    }
}

connectingToMongoDb().then((res) => {
    app.listen(port, () => {
        console.log('Server is Running on Port' + port);
    })
})

app.get('/students', async (req, res) => {
    try{
        const students = await db.collection('students').find().limit(10).toArray();

        res.set('Content-type', 'application/json');

        res.render('data.ejs', {students})
        // res.json(students);
        // res.render('data.ejs', { students: res.json(students), Headers: { 'Content-Type': 'application/json'}})
    }catch(err) {
        console.log(err);
    }
})
