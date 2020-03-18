import io from "socket.io-client"

// const ip = "http://10.255.255.12:3001"
const ip = "http://localhost:3001"

const socket = io.connect(ip)

export default socket
