import config from './config'
import apirouter from './api'
import express from 'express'

const server = express();
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