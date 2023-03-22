import Hapi from 'hapi'
import  routes  from './routes.js';

const server = Hapi.server({
  port: 9000,
  host: 'localhost',
  routes: {
      cors: {
        origin: ['*'],
      },
    },
});

const start = async () => {
  await server.start();
};

server.route(routes);


start();