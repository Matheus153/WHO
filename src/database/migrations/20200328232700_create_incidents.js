
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
       
        table.string('WHO_id').notNullable();

        table.foreign('WHO_id').references('id').inTable('WHO');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  
};
