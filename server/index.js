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

var port = process.env.PORT || 3000;

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
app.use("/editStudents", StudentsRoute);
app.use("/login", loginRoute);
app.use("/dashboard", DashboardRoute);

/*
//custom function to create hash
const createHash = async (str) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(str, salt);
  return hash;
};

//login
app.post("/auth", async (req, res) => {
  const action = req.query.action.toString();
  //login
  if (action === "login") {
    const { name, password } = req.body;
    if (name.length === 0 || password.length === 0) {
      return res.json({
        message: "Please fill all the fields and try again!",
        severity: "warning",
        success: false,
      });
    }
    // Collect info from db
    const [rows, fields] = await promisePool.query(
      "SELECT `name`,`password` FROM zbnhs_admin WHERE `id`=?",
      [1]
    );
    const db_userName = rows[0].name;
    const db_userPassword = rows[0].password;
    // Validate credentials
    const isSamePassword = await bcrypt.compare(password, db_userPassword);
    if (db_userName === name && isSamePassword) {
      const hashedUserName = await createHash(db_userName);
      console.log("hashedUserName:", hashedUserName);
      res.cookie("id", hashedUserName, {
        maxAge: 1000 * 60 * 30,
        httpOnly: true,
      });
      return res.json({
        success: true,
        severity: "success",
        message: "Successfully logged in",
      });
    } else {
      return res.json({
        message: "Incorrect username or password!",
        severity: "warning",
        success: false,
      });
    }
    //end of login
    //Start of verify
  } else if (action === "verify") {
    //const code = req.body.code;
    const cookieName = req.cookies["id"];
    console.log("verifyCookie:", cookieName);
    if (cookieName) {
      // Collect info from db
      const [rows, fields] = await promisePool.query(
        "SELECT `name`,`password` FROM zbnhs_admin WHERE `id`=?",
        [1]
      );
      const db_userName = rows[0].name;
      const compare = await bcrypt.compare(db_userName, cookieName);
      if (compare) {
        return res.json({ isVerified: true });
      } else {
        return res.json({ isVerified: false });
      }
    } else {
      return res.json({ isVerified: false });
    }
    //end of verify
  }
});
*/
app.listen(port, () => {
  console.log("Server running on port>", port);
});
