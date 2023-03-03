const { MongoClient, ServerApiVersion } = require('mongodb');




module.exports = async function connect() {
    const uri = "mongodb+srv://marcosjm33:joao1234@cluster0.z67vxh2.mongodb.net/?retryWrites=true&w=majority";

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        const db = client.db('xybra');
        return db;
    } catch (erro) {
        console.log('Erro ao conectar ao banco de dados:', erro);
    }

}