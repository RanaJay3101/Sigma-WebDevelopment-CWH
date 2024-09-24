const express = require('express');
const app = express();
const port = 3000;

const blog = require('./routes/blog');
app.use('/blog', blog);

const shop = require('./routes/shop');
app.use('/shop', shop);

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Hello World! - Jay');
    }
);

app.get('/rana/:name',(req,res)=>{
    res.send(`Hello 2-> ${req.params.name}`);
});
app.get('/rana/jay',(req,res)=>{
    res.send('Hello Jay');
});


app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us');
});

app.get('/blog/:slug/:x',(req,res)=>{
    // res.send('hello ' + req.params.slug);

    res.send(`hello ${req.params.slug} and ${req.params.x}`);
});

app.post('/',(req,res)=>{
    console.log('Hey its a post request');
    res.send('Hi i am a post request');
}
);

app.get('/index', (req, res) => {
    res.sendFile("C:\\Users\\RANA JAY HARESHBHAI\\Desktop\\WebD\\Sigma-WebDevelopment-CWH\\c5_ExpressJs\\templates\\index.html");
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);