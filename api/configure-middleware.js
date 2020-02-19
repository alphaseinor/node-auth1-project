const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')
const knexSessionStore = require('connect-session-knex')(session)
const knex = require('../database/dbConfig')

module.exports = server => {
  server.use(helmet())
  server.use(express.json())
  server.use(cors())
}


const sessionConfig = {
  name: 'rammstein',
  secret: 'du hast mich gefragt und ich hab nichts gesagt',
  saveUninitialized: true,
  resave: false,

  store: new knexSessionStore({
     knex,
     clearTimeout: 1000 * 60 * 10,
     createTable: true,
     sidfieldname: 'sid',
     tablename: 'sessions',
  }),

  cookie: {
     maxAge: 1000 * 60 * 10,
     secure: false,
     httpOnly: true
  }
}

module.exports = server => {
  server.use(helmet())
  server.use(express.json())
  server.use(cors())
  server.use(session(sessionConfig))
}