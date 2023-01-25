const express = require('express');
const session = require('express-session');

const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const JWT_SECRET = '6a4c0ec9b250971605477d4b83b5d5d6';

const db = require('./db');
const user_reg ='user_registrations';

const app = express();
app.use(session({ 
    secret: 'woody',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(cors({origin: true, credentials: true}));

//app.set("view engine", "ejs");
//app.set('views',path.join(__dirname,'views'))

app.listen(3001);


app.get("/", (req, res) => {
    res.send('Hello!');
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


app.get("/drop_table", (req, res) => {
    var sql = `DROP TABLE ${user_reg}`
  
    db.query( sql, function (err, results) {
        try {
            res.send('Table for registrations has been deleted!');
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
        if (err) {
            res.status(500).json({ message: err });
        }
        if (results.length === 0){
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


app.post("/forgot-password", (req, res) => {
    const email = req.body.email;

    const query = `SELECT * FROM ${user_reg} WHERE email = ?`;

    db.query(query, [email], (err, results) => {
        if(results.length === 0){
            //if email does not exist
            res.status(500).json({ message: "Email address does not exist!" });
        }

        else {
            try {
                const email = results[0].email;
                const user_id = results[0].user_id;
                const secret = JWT_SECRET + results[0].password;

                //generate token
                const token = jwt.sign({email, user_id}, secret, {expiresIn: '15m'});

                //genrate the link to reset password
                const link = `http://localhost:3000/reset-password/${user_id}/${token}`;
                console.log(link)
                res.status(200).json({message: 'We have sent a mail to your email address to reset your password.'})
            } catch (error) {
                res.status(500).json({message: error})
            }
        }
    });
});


app.get("/reset-password/:user_id/:token", (req, res) => {
    const {user_id, token} = req.params;

    const query = `SELECT * FROM ${user_reg} WHERE user_id = ?`;

    db.query(query, [user_id], (err, results) => {
        if(results === 0){
            res.status(500).json({message: 'User does not exist!'})
        }
        else {

            const secret = JWT_SECRET + results[0].password;
            try {
                //verify token
                const verify = jwt.verify(token, secret);
                res.status(200).json({message: 'Your token is valid!'})
                //res.render('reset-password', {email: results[0].email});
            } catch (error){
                res.status(500).json({message: 'Invalid token!'})
            }
        }
    });
});


app.post("/reset-password/:user/:token", (req, res) => {
    const {user, token} = req.params;
    const {newpassword} = req.body;

    const query = `SELECT * FROM ${user_reg} WHERE user_id = ?`;
    const query_2 = `UPDATE ${user_reg} SET password = ? WHERE user_id = ?`;

    db.query(query, [user], (err, results) => {
        if(results === 0){
            res.status(500).json({message: 'User does not exist!'})
        }
        else {
            const secret = JWT_SECRET + results[0].password;
            try {
                //verify token
                const verify = jwt.verify(token, secret);

                //hashed password and save to database
                const hashedPassword = bcrypt.hashSync(newpassword, 10);
                //update password in database
                db.query(query_2, [hashedPassword, user], (err, results) => {
                    try {
                        res.status(200).json({message: 'Password has been successfully reset!'})
                    } catch(error) {
                        console.log(error)
                        res.status(500).json({message: error})
                    }
                });
                
            } catch (error){
                res.status(500).json({message: 'Something went wrong. Your token may be invalid!'})
            }
        }
    });
});


app.get("/gallery", (req, res) => {
    let pictures = [];
    query = `SELECT * FROM motion_image ORDER BY stime DESC LIMIT 15`;

    db.query(query, (err, results) => {
        try {
            if (results.length > 0){

                //insert results to the list
                for (i=0; i<results.length; i++){
                    pictures.unshift(results[i])
                }
                res.status(200).json({image: pictures});
            }
            else {
                res.status(500).json({message: 'No gallery to show at the moment!'});
            }
        } catch (error) {
            res.status(500).json({message: error});
        }
    })
});