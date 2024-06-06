const express = require("express");

const {PORT}=require('./configs/serverconfig');

const setupandstartserver = async () => {
    const app = express();
   

    app.listen(PORT, () => {
        console.log(`Express server has started on ${PORT}`);
        console.log(process.env);
    });
}

setupandstartserver();
