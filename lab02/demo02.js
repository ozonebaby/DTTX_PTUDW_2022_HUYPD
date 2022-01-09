//YÊU CẦU FRAMEWORK
const express = require ('express');

const app = express();

const hostname = 'localhost';
const port = 3000;


const data=[
    {id: 1, name:'Iphone 13 pro MAX', price: 1500},
    {id: 2, name:'Ipad 11', price: 2000},
    {id: 3, name:'Macbook Pro', price: 2500},
    {id: 4, name:'Lenovo', price: 3000}
]
//GET : get all data
app.get('/', (req,res) => {
    res.writeHead(200, {'Content-type': 'text/json'})
    res.end(JSON.stringify(data));
    
});

//GET PRODUCT WITH BY ID
app.get('/product/:id', (req,res)=> {
    let id= req.params['id'];
    console.log(req.params);
    res.type('json');
    res.status(200).end(JSON.stringify(data[id]));
});

//GET: FILTER PRODUCT with price from .. to .. value
app.get('/price/:from-:to', (req,res) =>{
    let fromPrice= req.params['from'];
    let toPrice = req.params['to'];

    let result = data.filter(item => item.price >= fromPrice && item.price <= toPrice);
    console.log(result);

    res.type('json');
    res.status(200).end(JSON.stringify(result));

});

app.listen(port,hostname, ()=> {
    console.log(`Server is running at http://${hostname}:${port}`);
    
})
