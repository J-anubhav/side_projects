const express =require('express');
const URL =require('../models/url')

const router = express.Router();

router.get('/' , async(req,res) =>{
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