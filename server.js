const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => console.log("Database connection successful!"))
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// async function connectDatabase() {
//   try {
//     await mongoose.connect(DB_HOST);
//     app.listen(PORT);
//     console.log("Database connection successful!");
//   } catch (error) {
//     console.error(error.message);
//     process.exit(1);
//   }
// }
// connectDatabase();
