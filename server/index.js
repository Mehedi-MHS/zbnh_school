const express = require("express");
const cors = require("cors");
const DashboardRoute = require("./routes/DashboardRoute");
const HomeRoute = require("./routes/HomeRoute");
const TeachersRoute = require("./routes/TeachersRoute");
const fileUpload = require("express-fileupload");
const loginRoute = require("./routes/LoginRoute");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 3000;

//remove http://localhost:300  http://localhost:5173 in production mode.
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);
app.use(
  fileUpload({
    limits: { fileSize: 20 * 1024 * 1024 },
  })
);
app.use("/", HomeRoute);
app.use("/teachers", TeachersRoute);
app.use("/dashboard", DashboardRoute);
app.use("/login", loginRoute);

app.use(
  session({
    secret: "Lorem#Ipsum#Dolor#Sit#Amet",
    resave: false,
    saveUninitialized: true,
  })
);
app.listen(port, () => {
  console.log("Server running on port>", port);
});
