import ReactDOM from 'react-dom/client';
import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"

import App from './components/app';
import appCreateStore from './util/createStore.js';

// import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

let AppContainer = () => {
    return (
        <React.StrictMode>
            <Provider store={appCreateStore()}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
};

root.render(<AppContainer />);