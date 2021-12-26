const path = require('path');
const express = require('express');
const hbs = require('hbs');


const app = express();

// const port = process.env.PORT || 3000;

const port = process.env.PORT || 3000

const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

const publicPathDir = path.join(__dirname,'../public');
app.use(express.static(publicPathDir));

app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);


app.get('/',(req,res) =>{
    res.render('index',{
        Name:'weatherApp',
        Age: 20
    })
})

app.get('/about',(req,res) =>{
    res.render('about',{
        Name:'About',
        Age: 20
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        Name:'Help',
        Age: 20
    })
})

app.get('*',(req,res)=>{
    res.send('404 Page');
})



// app.get('', (req,res) => {
//     res.sendFile(fp);
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})