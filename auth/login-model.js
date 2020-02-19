const db = require('../database/dbConfig')

module.exports = {
   findUser
}

function findUser(userName) {
   return db('users')
      .where({ username: userName })
      .first()
}