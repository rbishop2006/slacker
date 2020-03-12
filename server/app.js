const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)
const ioserver = require("./io")
const exampleRoutes = require("./routes/example")
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", exampleRoutes)

ioserver(io)

server.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
