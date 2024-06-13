const express = require("express");
const bodyparser= require("body-parser");

const {PORT}=require('./config/serverconfig');


const apirouter=require('../src/routes/index');

const setupandstartserver = async () => {
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded());
    app.use('/api',apirouter);
    
    
    
    app.listen(PORT, async () => {
        console.log(`Express server has started on ${PORT}`);
        // console.log(process.env);
    });
}

setupandstartserver();
