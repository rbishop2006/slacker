const express = require("express")
const router = express.Router()
const conn = require("../db")

router.get("*", (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  const sql = "SELECT * FROM users WHERE username = ? and password = ?"
  conn.query(sql[(username, password)], (err, results, fields) => {})
})

module.exports = router
