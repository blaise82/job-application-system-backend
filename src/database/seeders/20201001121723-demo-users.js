export default {
  up: (queryInterface) =>
    queryInterface.bulkInsert("Users", [
      {
        id: "d1cf1224-94f6-4aa7-892a-bf07fb84b0f2",
        firstName: "Human",
        lastName: "Resources",
        email: "hr@gmail.com",
        password:
          "$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.",
        role: "HR",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "e8962b9f-e898-4424-b652-aa1e7e5c28e3",
        firstName: "Example",
        lastName: "Applicant",
        email: "example@gmail.com",
        password:
          "$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.",
        role: "APPLICANTS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "52526c72-a1c9-458a-93ca-4bd1703d99f7",
        firstName: "Example",
        lastName: "Applicant",
        email: "example2@gmail.com",
        password:
          "$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.",
        role: "APPLICANTS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
  down: (queryInterface) => queryInterface.bulkDelete("Users", null, {}),
};
