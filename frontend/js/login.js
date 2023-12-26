
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');


const connection = my.createConnection({
    host: 'localhost',
    database: 'nodelogin',
    user: 'root',
    password: '',
    database: 'nodelogin'
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

//http://localhost:3000/
app.get('/', function(request, response){
    // render login template
    response.sendFile(path.join(__dirname + '/login.ejs'));
});

//http://localhost:3000/auth
app.port('/auth', function(request, response){
    //capture the input fields
    let username = request.body.username;
    let password = request.body.password;
    //ensure the input fields are not empty
    if (username && password){
        //execute sql query that'll select the account from the database based on the specified username and password
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields){
            //if there's an issue with the query, output the error
            if (error) throw error;
            //if the account exists
            if (results.length > 0){
                //authenticate the user
                request.session.loggedin = true;
                request.session.username = username;
                //redirect to home page
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
                response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

//http://localhost:3000/home
app.get('/home', function(request, response){
    //if the user is logged in
    if (request.session.loggedin){
        //output username
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        //not logged in
        response.send('Please login to view this page!');
    }
    response.end();
});
app.listen(3000);
  


// $("#signup").click(function() {
//     $(".message").css("transform", "translateX(100%)");
//     if ($(".message").hasClass("login")) {
//       $(".message").removeClass("login");
//     }
//     $(".message").addClass("signup");
//   });
  
//   $("#login").click(function() {
//     $(".message").css("transform", "translateX(0)");
//     if ($(".message").hasClass("login")) {
//       $(".message").removeClass("signup");
//     }
//     $(".message").addClass("login");
//   });

