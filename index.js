const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('THIS IS CIRSS')
})

app.get('/users', (req, res) => {
  res.send('Daftar users')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})