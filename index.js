const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

const Port = process.env.Port || 5000;
const data = require('./data/data.json');

app.get('/', (req,res)=>{
    res.send(data)
})
app.get('/cate/:id',(req,res)=>{
    const id= req.params.id;
    const single = data.find(p => p.id == id)
    res.send(single)
})
app.listen(Port,()=>{
    console.log('server is running on',Port);
})
module.exports = app;