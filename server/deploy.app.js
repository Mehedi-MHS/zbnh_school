//change filename to app.js
// this is the format for server file deployment. just don't add any port and use only app.listen()

var express = require("express");

var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);

//const cookieParser = require("cookie-parser");
var cors = require("cors");
var DashboardRoute = require("./routes/DashboardRoute");
var HomeRoute = require("./routes/HomeRoute");
var TeachersRoute = require("./routes/TeachersRoute");
var StudentsRoute = require("./routes/StudentRoute");
var fileUpload = require("express-fileupload");
var loginRoute = require("./routes/LoginRoute");
require("dotenv").config();
const promisePool = require("./lib/dbConfig");

//var port = process.env.PORT || 3000;

var app = express();

const options = {
  host: process.env.HOST_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
};

const sessionStore = new MySQLStore(options, promisePool);
//remove http://localhost:300  http://localhost:5173 in production mode.
//app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://api.jbnhschool.edu.bd", "https://jbnhschool.edu.bd"],
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
    name: process.env.SESS_NAME,
    key: "session_cookie_name_is_undefined",
    secret: process.env.SESS_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 30,
      httpOnly: true,
    },
  })
);

app.use("/", HomeRoute);
app.use("/teachers", TeachersRoute);
app.use("/students", StudentsRoute);
app.use("/login", loginRoute);
app.use("/dashboard", DashboardRoute);

app.listen();
