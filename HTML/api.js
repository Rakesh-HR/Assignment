var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var sql = require('mssql');

 
app.use(bodyParser.json()); 
app.use(express.static('public'));
app.use(express.json());
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});
var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });
var config = {
    user:'sa',
    password:'Test@1234',
    server:'GGNW57Y2E',
    database:'AssignmentHTML',
    port:1433
};
var  executeQuery = function(res, query){             
    sql.connect(config, function (err) {
        if (err) {   
                    console.log("Error while connecting database :- " + err);
                    res.send(err);
                 }
                 else {
                        // create Request object
                        var request = new sql.Request();
                        // query to the database
/*                         request.query(query, function (err, res) {
                          if (err) {
                                     console.log("Error while querying database :- " + err);
                                     res.send(err);
                                    }
                                    else {
                                      res.send(res);
                                           } */
                                           request.query(query, function (err, rs) {
                                            if (err) {
                                            console.log("Error while querying database :- " + err);
                                            res.send(err);
                                            }
                                            else {
                                            res.send(rs);
                                            }
                              });

                            }

     });           
}






//GET API
app.get("/api/FormData", function(req , res){
    var query = "select * from [FormData]";
    executeQuery (res, query);
});

//POST API
app.post("/api/FormData", function(req , res){
    var query = "INSERT INTO [FormData] (name,email,age,phno) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.age+"','"+req.body.phno+"')";
    executeQuery (res, query);
});

//PUT API
app.put("/api/FormData/:name", function(req , res){
    var name ='\''+ req.params.name+'\''
    var query = "UPDATE [FormData] SET name= " + req.body.Name  +  " , email=  " + req.body.email + ",age= " + req.body.age  +  " , phno=  " + req.body.phno + "  WHERE name= " +name;
    executeQuery (res, query);
});

// DELETE API
app.delete("/api/FormData/:name", function(req , res){
    var name ='\''+ req.params.name+'\''
    var query = "DELETE FROM [FormData] WHERE name=" + name;
    executeQuery (res, query);
});

//app.listen(3000,()=>console.log("Listening on port 3000"));



