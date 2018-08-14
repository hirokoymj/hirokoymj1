import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
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


export default class AppRouter extends React.Component{
	render(){
		return (
			<BrowserRouter>
			<div>
				<TopNav />
				<Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/document/:id" component={DocumentPage} />
          <Route path="/editDoc" component={DocumentEditPage} />

          <Route path="/categoryControlPage" component={CategoryControlPage} />
          <Route path="/addCategoryPage" component={AddCategoryPage} />
          <Route path="/editCategory/:id" component={EditCategoryPage} />
          <Route path="/subCatControlPage" component={SubCatControlPage} />
          <Route path="/addSubCategoryPage" component={AddSubCategoryPage} />
          <Route path="/editSubCat/:id" component={EditSubCatPage} />
          <Route path="/linkControlPage" component={LinkControlPage} />
          <Route path="/addLinkPage" component={AddLinkPage} />
          <Route path="/editLink" component={EditLinkPage} />
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
//
// 2018/08/12
// <Route path="/catPage" component={CategoryPage} />
// <Route path="/subCatPage" component={SubCategoryPage} />
// <Route path="/editSub/:subId" component={SubCategoryEditForm} />
//<Route path="/edit/:id" component={EditCategoryPage} />

