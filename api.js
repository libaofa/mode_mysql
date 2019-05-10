//let faker = require('faker');
//console.log(faker.internet.email());
//console.log(faker.date.past());
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123123',
    database:'ig_clone'
});
connection.connect();
let q = 'SELECT * FROM ig_clone.comments as abc;';
connection.query(q,function(error, results, flieds){
    //if(error) throw error;
    console.log('the results is:',results)
});