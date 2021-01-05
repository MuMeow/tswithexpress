import { app } from "./router"
import { AddressInfo } from "net"

const server = app.listen(10800, "0.0.0.0", () => {
    const { port, address } = server.address() as AddressInfo
    console.log("service listening on :", "http://" + address + ":" + port)
})