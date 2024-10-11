const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');

//* express App
const app = express();

//* connection to database;
mongoose.connect('mongodb+srv://saborsara:sarasabor123@node-js-cluster.nb46p.mongodb.net/school')
.then((res) => {
    const port = 3000 || 3001;
    console.log('Connect To Db');
    app.listen(port, () => {
        console.log('Server is Running  ON Port : ' + port);
    })
})
.catch(err => console.log(err)); 

//* Register Engine : 
app.set('view engine', 'ejs');

//* My Routes

app.get('/', (req, res) => {
    res.render('index', {title: 'HOME PAGE'})
})

//* To Add A Student
app.get('/add-student', (req, res) => {
        const student = new Student({
            name: 'Yousserf',
            age: 30,
            city: 'Madrid',
            email: 'Youssef@gmail.com',
            score: 90
        });

        student.save()
            .then((data) => {
                res.send(data)
            })
            .catch((err) => console.log(err));
})

//* To Get All Students From the Database : 
app.get('/all-students', (req, res) => {
    Student.find()
        .then((data) => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

//* GEt Single Student : 
app.get('/single-student', (req, res) => {
    Student.findById('67082c45ea35cc850be1b371')
        .then( data => res.send(data))
        .catch(err => console.log(err));
})
//* 404 app.use((req, res, next) => { res.render(404)})