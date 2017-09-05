import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './IndexPage';
import AthletePage from './AthletePage';
import NotFoundPage from './NotFoundPage';

// routes={routes} onUpdate={() => window.scrollTo(0, 0)}

export default class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={IndexPage} />
          <Route path="athlete/:id" component={AthletePage} />
          <Route path="*" component={NotFoundPage} />
        </div>
      </BrowserRouter>
    );
  }
}
