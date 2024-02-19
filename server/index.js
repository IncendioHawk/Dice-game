const express = require("express")
const bodyParser = require("body-parser")
const app = express()
require("dotenv").config()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT

app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  res.send(`Username: ${username}, Password: ${password}`)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
