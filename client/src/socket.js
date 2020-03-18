import io from "socket.io-client"

const ip = "10.255.255.12:3001"
// const ip = "localhost:3001"

const socket = io.connect(ip)

export default socket

// const socket = io.connect("http://10.255.255.12:3001")
// const socket = io.connect("http://localhost:3001")
