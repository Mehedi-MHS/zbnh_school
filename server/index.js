var express = require("express");

var session = require("express-session");
var cors = require("cors");
var DashboardRoute = require("./routes/DashboardRoute");
var HomeRoute = require("./routes/HomeRoute");
var TeachersRoute = require("./routes/TeachersRoute");
var fileUpload = require("express-fileupload");
var loginRoute = require("./routes/LoginRoute");
var port = process.env.PORT || 3000;

var app = express();
var sess = {
  secret: "Lorem#Ipsum",
  resave: false,
  saveUninitialized: true,
  cookie: {},
};
if (app.get("env") === "production") {
  app.set("trust proxy", 1);
  sess.cookie.secure = true;
}

app.use(session(sess));
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

app.listen(port, () => {
  console.log("Server running on port>", port);
});
