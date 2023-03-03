const connect = require("../../../../DB/connectMongoDB");

module.exports = async function VerifyID(infosCadastro) {

    try {
        const db = await connect();

        // busca documentos na coleção
        const resultado = await db.collection('users').find({}).toArray()
        console.log(resultado[0]._id)
    } catch (erro) {
        console.log('Erro ao inserir documento:', erro);
    }


}