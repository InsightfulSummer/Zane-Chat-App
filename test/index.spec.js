const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

console.log('check 1', server.connected);
server.on('connect', function() {
  console.log('check 2', server.connected);
});

describe('Index tests', () => {

    test('test true is true', () => {
        expect(server.connected).toBe(true)
    });
});