const mysql = require("mysql")
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "",
  password: "",
  database: ""
})

module.exports = pool
