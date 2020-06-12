
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Build Table',
          description: 'Build a table from scratch',
          completed: false
        },
        {
          name: 'Build Chairs',
          description: 'Build Chairs from scratch',
          completed: false
        },
        {
          name: 'Paint Dining Room',
          description: 'Paint the Dining Room Green',
          completed: false
        },
      ]);
    });
};
