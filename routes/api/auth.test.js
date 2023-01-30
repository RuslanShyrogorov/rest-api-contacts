// require("dotenv").config();
// const supertest = require("supertest");
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// const { DB_TEST_HOST } = process.env;
// const app = require("../../app");
// const { User } = require("../../models");

// describe("signup", () => {
//   beforeAll(async () => {
//     mongoose.connect(DB_TEST_HOST);

//     console.log("Connected to test db");
//     await User.deleteMany();
//   });

//   afterAll(() => {
//     mongoose.disconnect(DB_TEST_HOST);
//   });

//   it("should register new user", async () => {
//     const response = await supertest(app).post("api/users/signup").send({
//       email: "ruslan@gmail.com",
//       password: "123456",
//     });

//     expect(response.statusCode().toBe(201));
//     expect(response.body.user.email).toBe("ruslan@gmail.com");
//   });

//   it("should not register same user second times", async () => {
//     await supertest(app).post("api/users/signup").send({
//       email: "ruslan2@gmail.com",
//       password: "123456",
//     });

//     const response = await supertest(app).post("api/users/signup").send({
//       email: "ruslan2@gmail.com",
//       password: "123456",
//     });

//     expect(response.statusCode).toBe(409);
//   });
// });
