import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { Socket as PhoenixSocket } from 'phoenix';

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

const GQL_URL = "https://api.owline.io/graphql"

const client = new ApolloClient({ 
  uri: GQL_URL,
  request: operation => {
    const token = localStorage.getItem("owline:token");
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    }
  }
})

ReactDOM.render(
<BrowserRouter>
  <LocaleProvider locale={enUS}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </LocaleProvider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
