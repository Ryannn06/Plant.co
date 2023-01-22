const express = require('express');
const session = require('express-session');

const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const bcrypt = require('bcrypt');

const db = require('./db');
const user_reg ='user_registrations'

const app = express();
app.use(session({ 
    secret: 'woody',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

//app.use(express.bodyParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({origin: true, credentials: true}));

app.listen(3001);

app.get("/", (req, res) => {
    res.send('Hello, Everyone!');
});


app.get("/create_table", (req, res) => {
    var sql = `CREATE TABLE ${user_reg} (user_id int NOT NULL AUTO_INCREMENT, username VARCHAR(240), email VARCHAR(240), password VARCHAR(240), PRIMARY KEY(user_id), UNIQUE KEY(email))`
  
    db.query( sql, function (err, results) {
    console.log(results);
        try {
            res.send('Table for registrations has been created!');
        } catch (err) {
            res.send(err + "error");
        }
        }
    );
});


app.post("/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    //inserting new data to database
    const query = `INSERT INTO ${user_reg} (username, email, password) VALUES (?, ?, ?)`;
    
    //query used to check if username exists
    const query_2 = `SELECT * FROM ${user_reg} WHERE username = ?`;

    //query used to check if email exists
    const query_3 = `SELECT * FROM ${user_reg} WHERE email = ?`;

    //check if username already exists
    db.query(query_2, [username], (err, results) => {
        if(err) {
            res.status(500).json({ message: err });
        }
        if(results.length > 0){
            res.status(500).json({ message: "Username already exists!" });
        }
        if(results.length === 0){

            //if username does not exist, check email next
            db.query(query_3, [email], (err, results) => {
                if(err) {
                    res.status(500).json({ message: err });
                }
                if(results.length > 0){
                    res.status(500).json({ message: "Email Address already exists!" });
                }
                if(results.length === 0){

                    //hashed password and save to database
                    const hashedPassword = bcrypt.hashSync(password, 10);
                    db.query(query, [username, email, hashedPassword], (err, results) => {
                        try {
                            res.status(200).json({message: "You have successfully registered! You may login now."});
                        } catch (err) {
                            res.status(500).json({ message: err });
                        }
                    });
                }

            });
        }

    });
});


app.post("/authenticate", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    //query used to check if username exists
    const query = `SELECT * FROM ${user_reg} WHERE username = ?`;

    db.query(query, [username], (err, results) => {
        console.log(results)
        if (err) {
            res.status(500).json({ message: err });
        }
        if (results.length === 0){
            console.log('2')
            res.status(500).json({ message: "Invalid Username or Password!" });
        } 
        else {
            bcrypt.compare(password, results[0].password, function(err, result) {
                if(err) {
                    res.status(500).json({ message: err });
                }
                if ( result == false ) {
                    console.log('error')
                    res.status(500).json({ message: 'Invalid Username or Password!' });
                }
                if ( result == true ) {
                    res.status(201).json({ message: 'Success login' });
                }
            });
        }
    });
});