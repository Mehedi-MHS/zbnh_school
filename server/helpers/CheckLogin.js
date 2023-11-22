const promisePool = require("../lib/dbConfig");
const CheckLogin = async (req, res, code) => {
  if (req.session.userName && code == "zbnhs#secret") {
    const [rows, fields] = await promisePool.query(
      "SELECT `name` FROM `zbnhs_admin`"
    );
    if (rows.affectedRows > 0) {
      const name = rows[0].name;
      if (name == req.session.userName) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

module.exports = CheckLogin;
