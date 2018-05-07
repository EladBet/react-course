const express = require("express");
const app = express();

app.get('/analytics', (req, res) =>{
    if(req.headers["authorization"] === "pb-user"){
        res.status(200).json(
            ['500','300','100']
        );
    } else {
        res.sendStatus(401);
    }
});

app.listen(5050, (err)=>{
    if(err){
        console.error(err);
        throw err;
    }
    console.log('server is up (5050)')
});
