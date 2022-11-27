const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("IP LOG AT " + Date("now"))
    res.send('Hello world from Cy-click<br><button>Click me!</button>')
})
app.listen(process.env.PORT || 3000)
