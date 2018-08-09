import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import TopNav from '../layout/TopNav';
import Footer from '../layout/Footer';
//import CategoryForm from '../components/CategoryForm';
//import SubCategoryForm from '../components/SubCategoryForm';
import LinkPage from '../components/LinkPage';
// Category Control Pages
import CategoryPage from '../components/CategoryPage';
import EditCategoryPage from '../components/EditCategoryPage';
import CategoryList from '../components/CategoryList';
import AddCategory from '../components/AddCategory';
// Sub Category Control Pages
import SubCategoryPage from '../components/SubCategoryPage';
import SubCategoryEditForm from '../components/SubCategoryEditForm';
// Test Control Page
import TestControlPage from '../components/admin/TestControlPage';
import TestAddLinkPage from '../components/admin/TestAddLinkPage';
// Link Control Page
import LinkControlPage from '../components/admin/LinkControlPage';


export default class AppRouter extends React.Component{
	render(){
		return (
			<BrowserRouter>
			<div>
				<TopNav />
				<Switch>
					<Route path="/" component={HomePage} exact={true} />
          <Route path="/document/:id" component={LinkPage} />
          <Route path="/edit/:id" component={EditCategoryPage} />
          <Route path="/catPage" component={CategoryPage} />
          <Route path="/subCatPage" component={SubCategoryPage} />
          <Route path="/editSub/:subId" component={SubCategoryEditForm} />
          <Route path="/testControlPage" component={TestControlPage} />
          <Route path="/testAddLinkPage" component={TestAddLinkPage} />
          <Route path="/linkControlPage" component={LinkControlPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
			</div>
			</BrowserRouter>
		)
	}
}


// <Route path="/catList" component={CategoryList} />
// <Route path="/catAdd" component={AddCategory} />

//<Route path="/googlemap" component={GoogleMapPage} />
// <Route path="/form" component={DocumentForm} />} />
// <Route path="/cForm" component={CategoryForm} />} />
// <Route path="/subForm" component={SubCategoryForm} />} />
// <Route path="/createLinkForm" component={CreateLinkForm} />} />
// <Route path="/document/:id" component={DocumentForm} />} />
// Admin Page
// <Route path="/cForm" component={CategoryForm} />} />
// <Route path="/subForm" component={SubCategoryForm} />} />  
