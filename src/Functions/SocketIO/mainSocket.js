const socketIO = require('socket.io');
const CadastroFunction = require('../ControllerFunctions/Cadastro/Cadastro');
const verifyId = require('../DB/MongoDB/FunctionsUtil/verifyId');


let countTest = 0

module.exports = async function
MainSocket(server) {

    const io = socketIO(server);

    io.on('connection',
        (socket) => {

            CadastroFunction(socket, io, countTest)
            verifyId()
        });
}