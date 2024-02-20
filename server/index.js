const express = require("express")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const fs = require("fs")
const app = express()
require("dotenv").config()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT

const styles = `*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: radial-gradient(circle, hsl(200, 60%, 20%), hsl(200, 60%, 10%));
  display: grid;
  place-items: center;
  min-height: 100vh;
}


form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;  
}

form input {
    font-size: 1.5rem;
    border: none;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}

form button {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: hsl(200, 60%, 50%);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: hsl(200, 60%, 40%);
    }
}

a {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  margin-top: 1rem;
  background-color: hsl(200, 60%, 50%);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
}`

app.post('/login', async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  console.log({username, password})
  const encryptedPassword = await bcrypt.hash(password, 10)
  const users = JSON.parse(fs.readFileSync("./users.json"))
  if (users[username] == null) {
    return res.send(`<style>${styles}</style><form action="/signup" method="post"><button type="submit">Click here to sign up</button><input name="username" value=${username}></input><input name="password" type="password" value=${password}></input><a href="https://ubiquitous-broccoli-wpxvrvgrjg62569x-5173.app.github.dev/">Click here to go back</a></form>`)
  }
  try {
    if (await bcrypt.compare(password, users[username])) {
      return res.redirect('https://ubiquitous-broccoli-wpxvrvgrjg62569x-5173.app.github.dev/game')
    } else {
      return res.status(401).redirect('https://ubiquitous-broccoli-wpxvrvgrjg62569x-5173.app.github.dev/')
    }
  } catch {
    res.status(500).send()
  }
})

app.post('/signup', async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const encryptedPassword = await bcrypt.hash(password, 10)
  const users = JSON.parse(fs.readFileSync("./users.json"))
  users[username] = encryptedPassword
  fs.writeFileSync("./users.json", JSON.stringify(users))
  res.send("User created")
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
