
exports.up = function(knex) {
  return knex.schema
    .createTable('users', users => {
      users.increments()
      users
        .string('username', 128)
        .notNullable()
        .unique()
      users
        .string('password', 128)
        .notNullable()
      users
        .boolean('active')
        .defaultTo(true)
    })
    .createTable('roles', roles =>{
      roles.increments()
      roles
        .string('name', 128)
        .notNullable()
        .unique()
      roles
        .string('description', 256)
        .notNullable()
      roles
        .boolean('active')
        .defaultTo(true)
      roles
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('users.id')
    })
}

exports.down = function(knex) {
  return (
    knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('users')
  )
}
