export default {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      id: 'd0a051d9-447a-49a8-aebc-7e1b031afd62',
      firstName: 'Human',
      lastName: 'Resources',
      email: 'hr@gmail.com',
      password: '$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.',
      role: 'HR',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'd0a051d2-447a-49a8-aebc-9e1b031afd62',
      firstName: 'Example',
      lastName: 'Applicant',
      email: 'example@gmail.com',
      password: '$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.',
      role: 'APPLICANTS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'd0a051d2-447a-49a8-aebc-9e1b001afd62',
      firstName: 'Example',
      lastName: 'Applicant',
      email: 'example2@gmail.com',
      password: '$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.',
      role: 'APPLICANTS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {})
};
