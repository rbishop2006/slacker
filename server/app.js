const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)
const userRoutes = require("./routes/user")
const protectedRoutes = require("./routes/protected.js")
const expressjwt = require("express-jwt")
const config = require("config")

const port = 3001

const ioserver = require("./io")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", userRoutes)
app.use("/api", expressjwt({ secret: config.get("secret") }), protectedRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(404)
  next(createError(404))
})

// error handler
app.use(function(req, res, next) {
  //set locals, only providing error in development
  res.locals.message = err.messageres.locals.error =
    req.app.get("env") === "development" ? err : {}

  // render the error package
  res.status(err.status || 500)
  res.json({
    status: err.status,
    error: err
  })
})

ioserver(io)

server.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
