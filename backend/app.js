import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import Coffee from './model/Coffee.js' //test 
import coffeeRoute from './routes/coffee.js'
import postRoute from './routes/post.js'

const app = express()
const PORT = 3000
const MONGO_PASSWORD = process.env.MONGO_PASSWORD

mongoose.connect(`mongodb+srv://bphan002:${MONGO_PASSWORD}@cluster0.hldwjxk.mongodb.net/?retryWrites=true&w=majority`)

app.use('/coffee', coffeeRoute)
app.use('/post', postRoute)

// const coffee = new Coffee({
//     name: 'New Expresso',
//     year: 2001,
//     caffine_content: 4.56,
//     caffine_percentage: 1.11,

// })

// await coffee.save()
// const firstCoffee = await Coffee.findOne({})
// console.log(firstCoffee)

app.listen(PORT,()=> {
    console.log(`Server is running on ${PORT}`)
})
