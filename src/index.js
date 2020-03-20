import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import MoviesDbService from './services/movies-db-service';
import { MoviesDbServiceProvider } from './components/moviesdb-service-context';

import store from './store';

const moviesDbService = new MoviesDbService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <MoviesDbServiceProvider value={moviesDbService}>
                <Router>
                    <App />
                </Router>
            </MoviesDbServiceProvider>
        </ErrorBoundry>
    </Provider>
, document.getElementById('root'));
