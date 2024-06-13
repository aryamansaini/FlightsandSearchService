const express= require("express");

const router = express.Router();

const v1apirouter=require('./v1/index');

router.use('/v1',v1apirouter);

module.exports =router;