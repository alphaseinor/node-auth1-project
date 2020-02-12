const db = require('../database/dbConfig.js')

module.exports = {
  add,
  find,
  findBy,
  findById,
}

function find() {
  return db('users')
    .select('id', 'username', 'active')
    .where('active="true"')
}

function findBy(filter) {
  return db('users')
    .select('id', 'username', 'password', 'active')
    .where('active="true"')
    .and(filter)
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
    .where(`active="true"`)
    .and({ id })
    .first()
}
