import React from 'react';
import ReactDOM from 'react-dom';

import Router from '../src/routes';
import aClient from './apollo';

import {  
  ApolloProvider  
} from "@apollo/client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={aClient}>
      <Router />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);