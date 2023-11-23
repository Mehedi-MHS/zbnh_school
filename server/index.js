var express = require("express");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
var cors = require("cors");
var DashboardRoute = require("./routes/DashboardRoute");
var HomeRoute = require("./routes/HomeRoute");
var TeachersRoute = require("./routes/TeachersRoute");
var fileUpload = require("express-fileupload");
var loginRoute = require("./routes/LoginRoute");
require("dotenv").config();
var port = process.env.PORT || 3000;

const options = {
  host: process.env.HOST_NAME,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

var app = express();
const sessionStore = new MySQLStore(options);

//remove http://localhost:300  http://localhost:5173 in production mode.
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(
  fileUpload({
    limits: { fileSize: 20 * 1024 * 1024 },
  })
);
app.use(
  session({
    name: "authSession",
    key: "session_cookie_name_is_undefined",
    secret: "Lorem#Ipsum",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {},
  })
);

app.use("/", HomeRoute);
app.use("/teachers", TeachersRoute);
app.use("/dashboard", DashboardRoute);

app.use("/login", loginRoute);

app.listen(port, () => {
  console.log("Server running on port>", port);
});
