const express = require("express");
const cors = require("cors");
const DashboardRoute = require("./routes/DashboardRoute");
//const dbConfig = require("./lib/dbConfig");

const app = express();
const port = process.env.PORT || 3000;

//remove http://localhost:300  http://localhost:5173 in production mode.

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);

app.use("/dashboard", DashboardRoute);
app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to home" });
});
/*
app.get("/getUsers", async (req, res, next) => {
  const [rows, fields] = await dbConfig.query("SELECT * FROM `users`");
  res.json({ message: "Hello!, From server", users: rows });
});
*/

app.listen(port, () => {
  console.log("Server running on port>", port);
});
