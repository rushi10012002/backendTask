const express = require('express')
const cors=require("cors")
const DatabaseConnection=require("./config/database")
const userRoute=require("./routes/users")
const app = express()
const port = 5000
app.use(cors())
DatabaseConnection()
app.use(express.json())

app.use('/api/user',userRoute)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))