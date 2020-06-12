
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          description: 'Gather Materials',
          notes: 'Gather all necessary materials before starting the project',
          completed: false
        },
        {
          project_id: 1,
          description: 'Build Table',
          notes: 'Make sure the table is at least 2.5 Feet tall',
          completed: false
        },
        {
          project_id: 1,
          description: 'Stain Wood',
          notes: 'Add a nice color to the wood so it looks fancy',
          completed: false
        },
        {
          project_id: 2,
          description: 'Gather Materials',
          notes: 'Gather all necessary materials before starting the project',
          completed: false
        },
        {
          project_id: 2,
          description: 'Build Chairs',
          notes: 'Make at least 4 chairs. 6 would be preferable',
          completed: false
        },
        {
          project_id: 2,
          description: 'Stain or Paint',
          notes: 'Either stain the wood a nice color, or paint the chairs so they look pleasant',
          completed: false
        },
        {
          project_id: 2,
          description: 'Add cushions',
          notes: 'Seat cushions make the chair much more comfortable',
          completed: false
        },
        {
          project_id: 3,
          description: 'Gather Materials',
          notes: 'Gather all necessary materials before starting the project',
          completed: false
        },
        {
          project_id: 3,
          description: 'Cover floor',
          notes: 'Use Tarps to cover the floor to avoid any paint dripping on it',
          completed: false
        },
        {
          project_id: 3,
          description: 'Apply painters tape',
          notes: 'Add tape to any door molding, window molding, and cover electrical sockets',
          completed: false
        },
        {
          project_id: 3,
          description: 'Paint walls',
          notes: 'Do not paint the ceiling',
          completed: false
        },
        {
          project_id: 3,
          description: 'Allow time for paint to dry',
          notes: 'Ventilate the room while paint dries with any fans you may have',
          completed: false
        },
      ]);
    });
};
