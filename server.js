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

// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err,data) => {
//         res.send(data.toString());
//     });
// });

server.listen(config.port, ()=>{
    console.log('Express listening on port', config.port);
})