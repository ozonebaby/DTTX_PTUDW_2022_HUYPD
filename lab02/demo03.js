//YÊU CẦU FRAMEWORK
const express = require ('express');

const app = express();

const hostname = 'localhost';
const port = 3000;


const data=[
    {id: 1, name:'Iphone 13 pro MAX', price: 1500, type:'mobile'},
    {id: 2, name:'Ipad 11', price: 2000, type:'mobile'},
    {id: 3, name:'Macbook Pro', price: 2500, type:'laptop'},
    {id: 4, name:'Lenovo', price: 3000, type:'laptop'}
];


const printrequestinfo= (req,res,next) =>{
    console.log(req.method, req.path);
    next();
}

//GET : get all data
app.get('/', (req,res) => {
    res.writeHead(200, {'Content-type': 'text/json'})
    res.end(JSON.stringify(data));
    
});


//GET: FILTER PRODUCT with price from .. to .. value
app.get('/price/:from-:to',[printrequestinfo, (req,res,next) =>{
    let fromPrice= req.params['from'];
    let toPrice = req.params['to'];

    let result = data.filter(item => item.price >= fromPrice && item.price <= toPrice);
    console.log(result);

    res.type('json');
    res.status(200).end(JSON.stringify(result));

}]);

app.listen(port,hostname, ()=> {
    console.log(`Server is running at http://${hostname}:${port}`);
    
})
