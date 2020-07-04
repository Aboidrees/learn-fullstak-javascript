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

server.get('/', (req, res) => {
    res.render('index', {
        content: 'Hello express and <em>ejs</em>'
    });
});

server.use('/api', apirouter);
server.use(express.static('public'));

server.listen(config.port, ()=>{
    console.log('Express listening on port', config.port);
})