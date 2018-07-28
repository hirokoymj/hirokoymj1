import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
//import DocumentPage from '../components/DocumentPage';
import NotFoundPage from '../components/NotFoundPage';
import TopNav from '../layout/TopNav';
import Footer from '../layout/Footer';
import CategoryForm from '../components/CategoryForm';
import SubCategoryForm from '../components/SubCategoryForm';
import LinkPage from '../components/LinkPage';

export default class AppRouter extends React.Component{
	render(){
		return (
			<BrowserRouter>
			<div>
				<TopNav />
				<Switch>
					<Route path="/" component={HomePage} exact={true} />
          <Route path="/document/:id" component={LinkPage} />} />
					<Route component={NotFoundPage} />
        </Switch>
        <Footer />
			</div>
			</BrowserRouter>
		)
	}
}

//<Route path="/googlemap" component={GoogleMapPage} />
// <Route path="/form" component={DocumentForm} />} />
// <Route path="/cForm" component={CategoryForm} />} />
// <Route path="/subForm" component={SubCategoryForm} />} />
// <Route path="/createLinkForm" component={CreateLinkForm} />} />
// <Route path="/document/:id" component={DocumentForm} />} />
// Admin Page
// <Route path="/cForm" component={CategoryForm} />} />
// <Route path="/subForm" component={SubCategoryForm} />} />  
