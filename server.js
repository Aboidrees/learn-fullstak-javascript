import config from './config'
import apirouter from './api'
import express from 'express'
import sassMiddleWare from 'node-sass-middleware';
import path from 'path'

const server = express();

server.use(sassMiddleWare({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get('/', (req, res) => {
    serverRender()
        .then(( {initialMarkup, initialData} ) => {
            res.render('index', {
                initialMarkup,
                initialData
            });
        })
        .catch(console.error);

});

server.use('/api', apirouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.log('Express listening on port', config.port);
})