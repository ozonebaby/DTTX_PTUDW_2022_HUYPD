//YÊU CẦU FRAMEWORK
const express = require ('express');

const app = express();

const hostname = 'localhost';
const port = 3000;

//CRUD

//GET DỮ LIỆU => SELEC/READ
app.get('/', (req,res) => {
    res.end("GET: OK Hello");
    
});

//INSERT DỮ LIỆU => INSERT/CREATE
app.post('/', (req,res) => {
    res.end('POST: Object is created');

});

// UPDATE DỮ LIỆU => UPDATE
app.put('/', (req,res) => {
    res.end('PUT: Data is updated');

});

//DELETE DỮ LIỆU => DELETE
app.delete('/', (req,res) => {
    res.end('DELETE: Data is deleted');

});
;

app.listen(port,hostname, ()=> {
    console.log(`Server is running at http://${hostname}:${port}`);
    
})
