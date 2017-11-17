'use strict'

const express = require('express')
const app = express()

app.use(
  express.static('.', {
    index: ['index.html'],
    extensions: ['html']
  })
)

const port = 1337
app.listen(port, () => {
  console.log(`listening on port ${port}!`)
  console.log(`http://localhost:${port}`)
})
