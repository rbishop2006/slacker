const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)
const ioserver = require("./io")
const userRoutes = require("./routes/user")
const protectedRoutes = require("./routes/protected.js")
const expressjwt = require("express-jwt")
const config = require("config")

const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", userRoutes)
app.use("/api", expressjwt({ secret: config.get("secret") }), protectedRoutes)

ioserver(io)

server.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
