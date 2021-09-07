import * as net from "net";
function handler (socket) {
    console.log("Niekam neįdomu");
    console.log(socket.remoteAddress);
    console.log(socket.remotePort);
    console.log(socket.localAddress);
    console.log(socket.localPort);
    socket.end();
}
const goAway = net.createServer(handler);
handler();
srv.listen (3000);
console.log("GoAway started")