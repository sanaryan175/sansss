require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT||3000;

app.get('/', (req, res) => {
  res.send('Hello World! this is aryan')
})

app.get('/home',(req,res)=>{
    res.send("hey there!! i am learning backend web dev")
})
app.get('/aryan',(req,res)=>{
    res.send("<h1>aryan is mobile addicted!! he always plays games</h1>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})