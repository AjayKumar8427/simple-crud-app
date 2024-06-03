const express = require('express');
const app = express();
const Product = require('./models/products.model')
const mongoose = require('mongoose')
const productRoute=require('./routes/product.route')

app.use(express.json())

app.get('/', (req, res) => {
    console.log("hello  world")
})

// Product APIs
app.use('/api/products',productRoute)


mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.log("Connected to database")
        app.listen(4001, () => {
            console.log("server started on 4001")
        })
    }).catch(() => {
        console.log("Not Connected to database")
    })


