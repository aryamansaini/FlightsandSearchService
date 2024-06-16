const express = require("express");
const bodyparser= require("body-parser");

const db = require('./models/index');

const {PORT}=require('./config/serverconfig');


const apirouter=require('../src/routes/index');

const setupandstartserver = async () => {
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded());
    app.use('/api',apirouter);
    
    
    
    app.listen(PORT, async () => {
        console.log(`Express server has started on ${PORT}`);

        if(process.env.SYNC_DB)
        {
}
    });
}

setupandstartserver();
