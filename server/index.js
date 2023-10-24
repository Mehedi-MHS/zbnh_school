const express = require("express");
const cors = require("cors");
const DashboardRoute = require("./routes/DashboardRoute");
const HomeRoute = require("./routes/HomeRoute");
const TeachersRoute = require("./routes/TeachersRoute");
//const dbConfig = require("./lib/dbConfig");

const app = express();
const port = process.env.PORT || 3000;

//remove http://localhost:300  http://localhost:5173 in production mode.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);

app.use("/", HomeRoute);
app.use("/teachers", TeachersRoute);
app.use("/dashboard", DashboardRoute);

/*
app.get("/getUsers", async (req, res, next) => {
  const [rows, fields] = await dbConfig.query("SELECT * FROM `users`");
  res.json({ message: "Hello!, From server", users: rows });
});
*/

app.listen(port, () => {
  console.log("Server running on port>", port);
});
