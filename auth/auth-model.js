const db = require('../database/dbConfig')

module.exports = {
   addUser
}

function addUser(newUser) {
   return db('users')
      .insert(newUser)
}