const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
app.use(cookieParser());
app.all('/', (req, res) => {
    var auth = res.cookie("auth");
    if (auth){
        res.redirect('/home')
    } else {
        res.redirect('/login')
    }
})
app.get('/home', (req,res)=>{})
app.listen(process.env.PORT || 3000)
