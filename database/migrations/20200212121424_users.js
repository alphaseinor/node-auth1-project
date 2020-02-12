
exports.up = function(knex) {
  return knex.schema
    //for authX
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
    //for authZ
    .createTable('roles', roles => {
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
    })
    //for authZ many users can have many roles, and many roles can be assigned to many users
    .createTable('user_role', user_roles => {
      user_roles
        .primary('user_id', 'role_id')
      user_roles.integer('role_id')
        .notNullable()
        .unsigned()
        .references('roles.id')
      user_roles.integer('user_id')
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
