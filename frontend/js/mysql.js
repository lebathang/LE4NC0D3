
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    database: "nodelogin",
    user: "root",
    password: "",
});
connection.connect(function (err)  {
    if (err){
    console.log("Error Connecting!" + err.stack + "\n");
    return;
    }
    else{
        console.log("Connected as ID " + connection.threadId + "\n");
    }
});

module.exports = connection;