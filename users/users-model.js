const db = require('../database/dbConfig.js')

module.exports = {
  add,
  find,
  findBy,
  findById,
}

function find() {
  console.log("in find")
  return db('users')
    .select('id', 'username', 'active')
}

function findBy(filter) {
  console.log(filter)
  return db('users')
    .select('id', 'username', 'password', 'active')
    .where(filter)
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids
      return findById(id)
    })
}

function findById(id) {
  return db('users')
    .select('id', 'username', 'active')
    .where({ id })
    .first()
}
