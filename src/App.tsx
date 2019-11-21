import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';

import apolloClient from './services/apollo';
import history from './services/history';

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router history={history}>
        <div className="section">
          <div className="container">
            <Header />
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
