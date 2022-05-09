const express = require('express')

const app = express()

const PORT = process.env.port || 5000


app.get('/', (req,res) => {
    res.send('Aditya garad A12')
})

app.listen(PORT , () => {
    console.log('server connected ....')
})