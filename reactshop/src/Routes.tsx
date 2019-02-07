import * as React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './Header';
import LoginPage from './LoginPage';
import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';
import NotFoundPage from './NotFoundPage';
import ContactUsPage from './ContactUsPage';

const AdminPage = React.lazy(() => import("./AdminPage"));

const RoutesWrap: React.FunctionComponent = () => {
  return (
      <Router>
          <Route component={Routes} />
      </Router>
  );
};

const Routes: React.FunctionComponent<RouteComponentProps> = (props) => {

  const [loggedIn] = React.useState(true);

  return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
              key={props.location.key}
              classNames="animate"
              timeout={500}
          >
            <Switch>
              <Redirect exact={true} from="/" to="/products" />
              <Route exact={true} path="/products" component={ProductsPage} />
              <Route path="/products/:id" component={ProductPage} />
              <Route path="/contactus" component={ContactUsPage} />
              <Route path="/admin">
                  { loggedIn ? (
                      <Suspense fallback={<div className="page-container">Loading...</div>}>
                        <AdminPage />
                      </Suspense>) : (
                        <Redirect to="/login"/>
                      ) }
              </Route>
              <Route path="/login" component={LoginPage} />
              <Route component={NotFoundPage}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
  );
};

export default RoutesWrap;
