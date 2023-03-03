const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const app = require('../../index')

const port = process.env.PORT || 3000;



const mainSocket = require('../SocketIO/mainSocket');


async function Init() {

    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`);

        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

        cluster.on('exit',
            (worker, code, signal) => {
                console.log(`worker ${worker.process.pid} died`);
            });
    } else {

        let server = app.listen(port,
            () => {
                console.log(`Server is running on port ${port}`);
            });


        // adiciona funcionalidades

        await mainSocket(server)

        console.log(`Worker ${process.pid} started`);
    }
}


module.exports = Init