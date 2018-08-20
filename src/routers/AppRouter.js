import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
// import TopNav from '../layout/TopNav';
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


export default class AppRouter extends React.Component{
  render(){
		return (
			<BrowserRouter>
			<div>
				<Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/document/:id" component={DocumentPage} />
          <Route path="/editDoc" component={DocumentEditPage} />
          <Route path="/admin/categoryControlPage" component={CategoryControlPage} />
          <Route path="/admin/addCategoryPage" component={AddCategoryPage} />
          <Route path="/admin/editCategory/:id" component={EditCategoryPage} />
          <Route path="/admin/subCatControlPage" component={SubCatControlPage} />
          <Route path="/admin/addSubCategoryPage" component={AddSubCategoryPage} />
          <Route path="/admin/editSubCat/:id" component={EditSubCatPage} />
          <Route path="/admin/linkControlPage" component={LinkControlPage} />
          <Route path="/admin/addLinkPage" component={AddLinkPage} />
          <Route path="/admin/editLink" component={EditLinkPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
			</BrowserRouter>
		)
	}
}

// <TopNav />
// <Footer />



