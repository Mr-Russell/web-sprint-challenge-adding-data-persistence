
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 60)
        .notNullable()
        .unique();
      tbl.string('description', 255);
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('projects.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.string('description', 255)
        .notNullable();
      tbl.string('notes', 255);
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.integer('name', 60)
        .notNullable()
        .unique();
      tbl.string('description', 255)
    })
    .createTable('project_resources', tbl => {
      tbl.increments();
      tbl.integer('project_id')
        .unsigned()
        .references('projects.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.integer('resource_id')
        .unsigned()
        .references('resources.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
