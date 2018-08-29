import React from 'react';
//import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import TopNav from '../layout/TopNav';
import Footer from '../layout/Footer';
// Tech Link Pages
import DocumentPage from '../components/DocumentPage';
import DocumentEditPage from '../components/DocumentEditPage';
// Admin Link Control pages
import LinkControlPage from '../components/admin/LinkControlPage';
import AddLinkPage from '../components/admin/AddLinkPage';
import EditLinkPage from '../components/admin/EditLinkPage';
// Admin Category Control Pages
import CategoryControlPage from '../components/admin/CategoryControlPage';
import AddCategoryPage from '../components/admin/AddCategoryPage';
import EditCategoryPage from '../components/admin/EditCategoryPage';
// Admin SubCategogry Pages
import AddSubCategoryPage from '../components/admin/AddSubCategoryPage';
import SubCatControlPage from '../components/admin/SubCatControlPage';
import EditSubCatPage from '../components/admin/EditSubCatPage';
import PrivateRoute from './PrivateRoute';


export const history = createHistory();

const AppRouter = () =>(
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/document/:id" component={DocumentPage} />
          <Route path="/editDoc" component={DocumentEditPage} />
          <PrivateRoute path="/admin/categoryControlPage" component={CategoryControlPage} />
          <PrivateRoute path="/admin/addCategoryPage" component={AddCategoryPage} />
          <PrivateRoute path="/admin/editCategory/:id" component={EditCategoryPage} />
          <PrivateRoute path="/admin/subCatControlPage" component={SubCatControlPage} />
          <PrivateRoute path="/admin/addSubCategoryPage" component={AddSubCategoryPage} />
          <PrivateRoute path="/admin/editSubCat/:id" component={EditSubCatPage} />
          <PrivateRoute path="/admin/linkControlPage" component={LinkControlPage} />
          <PrivateRoute path="/admin/addLinkPage" component={AddLinkPage} />
          <PrivateRoute path="/admin/editLink" component={EditLinkPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
);

export default AppRouter;

// <TopNav />
// <Footer />



