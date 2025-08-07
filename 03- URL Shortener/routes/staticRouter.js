const express =require('express');
const URL =require('../models/url');
const { restricTo } = require('../middlewares/auth');

const router = express.Router();

router.get('/' , restricTo(["Normal"]),async(req,res) =>{
    const allurls = await URL.find({});
    return res.render("home", {
        urls : allurls,
    });
});

router.get('/Signup', (req, res)=>{
    return res.render('Signup');
})

router.get('/login', (req,res)=>{
    return res.render('login');
})

module.exports = router;