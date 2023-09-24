require('dotenv').config()
const express=require('express')
const app=express()

let mongoose=require('mongoose')
mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('connected to database'))

const subscribersRouters=require('./routes/subscribers.js')
app.use(express.json())

app.use('/subscribers',subscribersRouters)


app.listen(process.env.PORT,()=>{console.log('server is running on',process.env.PORT )})