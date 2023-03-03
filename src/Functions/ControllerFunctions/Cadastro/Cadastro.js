const CadastroDB = require("../../DB/MongoDB/Insert/Users/Cadastro/CadastroDB")



module.exports = async(socket, io, countTest2) => {

    let countTest = countTest2

    socket.on('chatMessage',
        (msg) => {
            //    : let tes = require('./Functions/DB/MongoDB/test/test')
            io.emit('chatMessage', msg)
        })

    socket.on('sendCadastro',
        async(msg2) => {



            if (countTest <= 0) {
                io.emit('sendCadastro', msg2)

                let infosCadastro = {
                    _id: 0,
                    msg2
                }

                await CadastroDB(infosCadastro)
                countTest = countTest + 1
                console.log('send info count: ', countTest)
            }

            if (countTest > 0) {
                console.log('user violando request');
                socket.send('voce foi expulso otario, id: ', socket.id)
                socket.leave('chatMessage');
            }
        })
}