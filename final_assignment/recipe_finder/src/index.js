import React from 'react';
import {createRoot} from 'react-dom/client';
import {Auth0Provider} from '@auth0/auth0-react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';


const root = createRoot(document.getElementById('root'));

root.render(
    <Router basename="/">
        <Auth0Provider
            domain="dev-l1s20vx3pjrtlsn6.us.auth0.com"
            clientId="6AZnw3QRYC2HDAHYfEDZr05GAgzKr3XS"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >

            <App/>

        </Auth0Provider>
    </Router>,
);