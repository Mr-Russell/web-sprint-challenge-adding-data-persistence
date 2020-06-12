
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'Wood',
          description: 'Variety of shapes and sizes'
        },
        {
          name: 'Nails',
          description: '1.5 inches long'
        },
        {
          name: 'Hammer',
          description: 'Has a nice grip so it wont slip out of your hand'
        },
        {
          name: 'Wood Stain',
          description: 'Gives wood a nice dark finish'
        },
        {
          name: 'Cushions',
          description: 'For comfortable chairs'
        },
        {
          name: 'Paint',
          description: 'Green'
        },
        {
          name: 'Paint Brush',
          description: 'Soft bristles that wont damage walls'
        },
        {
          name: 'Paint Roller',
          description: 'Covers more area than a brush'
        },
        {
          name: 'Tarps',
          description: 'For protecting floors and furniture when painting'
        },
        {
          name: 'Painters Tape',
          description: 'Sticky enough to stay on walls, but not too sticky so it can be removed easily'
        },
        {
          name: 'Fan',
          description: 'For ventilation'
        },
      ]);
    });
};
