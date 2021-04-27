require('dotenv').config()
const server = require('./api/server')

// const express = require('express')
// const path = require('path')


const PORT = process.env.PORT || 3300

// server.use(express.static(path.join(__dirname, 'client/dist')))

// server.use('*', (req, res) => {
  // res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
// })

server.listen(PORT, () => {
  if (PORT === 3300) {
    console.log(`SET UP ENV Listening on port ${PORT}...`);
  } else {
    console.log(`Listening on port ${PORT}`);
  }
});