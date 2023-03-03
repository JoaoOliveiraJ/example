const conectar = require('../../../../DB/connectMongoDB')


module.exports = async function test() {


    try {
        const db = await conectar();
        const resultado = await db.collection('mycollection').insertOne({ buct: 'buceta' });
        console.log('Documento inserido com sucesso!');
        return resultado;
    } catch (erro) {
        console.log('Erro ao inserir documento:', erro);
    }


}