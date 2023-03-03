const connect = require("../../../../DB/connectMongoDB");

module.exports = async function VerifyIDZero() {

    try {
        const db = await connect();

        // busca documentos na coleção
        const resultado = await db.collection('users').find({}).toArray()

        if (resultado[0]._id === 0) {
            return true
        } else {
            return false
        }
    } catch (erro) {
        console.log('Erro ao inserir documento:', erro);
    }


}