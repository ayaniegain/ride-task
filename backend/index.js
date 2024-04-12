
const express = require('express')
const router = require('./routers/router.user')
const port = 8000
const connectDB = require('./db/db');
connectDB()
var cors = require('cors')
var app = express()



app.use(cors())

app.use(express.json());
 


app.use('/api/v1/',router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})