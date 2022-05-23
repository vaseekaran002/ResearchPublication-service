const express = require("express");
const { display } = require("../controllers/Papercontroller");
const { route } = require("./auth");
const router = express.Router();

router.post("/paperRecord",async(req,res)=>{
    await display(req,res);
})