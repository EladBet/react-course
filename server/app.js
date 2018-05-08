const express = require("express");
const ssr = require('../build/main.ssr.bundle');
const app = express();

app.set('view engine', 'ejs');

app.get('/analytics', (req, res) =>{
    if(req.headers["authorization"] === "pb-user"){
        res.status(200).json(
            ['500','300','100']
        );
    } else {
        res.sendStatus(401);
    }
});

app.get('/ssr', (req, res) => {
    const html =  ssr.default({
        ssrData:"I am SSR BITCHES"
    });
    res.render('ssr', {
        html,
        appUrl:'app.bundle.js'
    });
});

app.use(express.static('build'));


app.listen(5050, (err)=>{
    if(err){
        console.error(err);
        throw err;
    }
    console.log('server is up (5050)')
});
