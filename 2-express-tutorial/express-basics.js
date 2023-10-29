const express = require('express');
const app = express();

//app.listen
app.listen(5000, (req, res)=>{
    console.log('server started at port 5000');
    // res.end("server started at port 5000")
})
//app.get
app.get('/', (req, res)=>{
    res.status(200).send('Home page');
    console.log('user hit the home page');
})

app.get('/about', (req, res)=>{
    res.status(200).send('About page');
    console.log('user hit the about page');
})
//app.all (use to handle errors)
app.all('*', (req, res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
});
//app.post
//app.put
//app.delete

//app.use

