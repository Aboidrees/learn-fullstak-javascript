import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import Axios from 'axios';

const serverRender = () =>
    Axios.get(`${config.serverUrl}/api/contests`)
        .then(resp => {

            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialContests={resp.data.contests} />
                ),
                initialData: resp.data
            };
        });
        
export default serverRender;