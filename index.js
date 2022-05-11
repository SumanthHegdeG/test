const express= require('express')
const app=express()

const port=process.env.port || 5000 
app.use('/',(req,res,next)=>{

res.send("sumanth hegde")
res.end();

})

app.listen(port,()=>{console.log(`port is running @ ${port}`)})

