const express = require("express");
//const cors = require("cors");
const dbConfig = require("./lib/dbConfig");

const app = express();
const port = process.env.PORT || 3000;

//var whitelist = ["http://localhost:5173", "https://test.onlineferiwala.com.bd"];
//remove http://localhost:300 in production mode.
/*
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://www.google.com",
    ],
  })
);
*/
app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to home" });
});

app.get("/getUsers", async (req, res, next) => {
  const [rows, fields] = await dbConfig.query("SELECT * FROM `users`");
  res.json({ message: "Hello!, From server", users: rows });
});

app.listen(port, () => {
  console.log("Server running on port>", port);
});
