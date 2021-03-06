exports.up = function(knex) {
  // console.log('Creating the Articles table..');
  return knex.schema.createTable('articles', articlesTable => {
    articlesTable.increments('article_id').primary();
    articlesTable.string('title');
    articlesTable.text('body');
    articlesTable.integer('votes').defaultTo(0);
    articlesTable.string('topic').references('topics.slug');
    articlesTable.string('author').references('users.username');
    articlesTable.timestamp('created_at').defaultTo(knex.fn.now());
  });
};
exports.down = function(knex) {
  // contains the logic to undo the update in the up function
  // console.log('Removing Articles tables..');
  return knex.schema.dropTable('articles');
};
