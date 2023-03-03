const conectar = require('../../../../../../DB/connectMongoDB');
const VerifyCreateIdZero = require('../../../FunctionsUtil/VerifyCreateIdZero');

module.exports = async function Cadastro(infosCadastro) {


    try {
        const db = await conectar();

        let verifyIdZero = await VerifyCreateIdZero()

        if (verifyIdZero) {
            const resultado = await db.collection('users').insertOne(infosCadastro);
            console.log('Documento inserido com sucesso!');
            return resultado;
        }


    } catch (erro) {
        console.log('Erro ao inserir documento:', erro);
    }


}