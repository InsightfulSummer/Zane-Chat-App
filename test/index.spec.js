const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const socket = io.connect();


console.log('check 1', socket.connected);
socket.on('connect', function() {
  console.log('check 2', socket.connected);
});

describe('Index tests', () => {

    test('test true is true', () => {
        expect(true).toBe(true)
    });
});