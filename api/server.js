const express = require('express')

const apiRouter = require('./api-router.js')
const configureMiddleware = require('./configure-middleware.js')

const server = express()

configureMiddleware(server)

server.use('/api', apiRouter)

server.get("/", (req, res)=>{
res.send(`<p>This server has the following functions</p>

  <p>----Create----<br>
  POST<br>
  /api/users<br>
  Creates a user using the information sent inside the request body.</p>
  
  <p>----Read----<br>
  GET<br>
  /api/users<br>
  Returns an array of all the user objects contained in the database.</p>
  
  <p>/api/users/:id<br>
  Returns the user object with the specified id.</p>
  
  <p>----Update----<br>
  PUT<br>
  /api/users/:id<br>
  Updates the user with the specified id using data from the request body.<br>
  Returns the modified document, NOT the original.</p>
  
  <p>----Delete----<br>
  DELETE<br>
  /api/users/:id<br>
  Removes the user with the specified id and returns the deleted user.</p>
  `)
})

module.exports = server