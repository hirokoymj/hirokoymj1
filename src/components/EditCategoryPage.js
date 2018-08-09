import React from 'react';
import firebase from "../firebase/firebase3";
import CategoryForm from './CategoryForm';

export default class EditCategoryPage extends React.Component{
    onSubmit = (categoryItem)=>{
      console.log('EditCategoryPage - onSubmit');
      const{categoryId, categoryName} = categoryItem;
      // Update database
      firebase.database().ref('categories/' + categoryId).update({
        name: categoryName
      }).then(()=>{
        console.log('Data is updated!');
        this.props.history.push('/catPage');   

      }).catch((e)=>{
        console.log('This failed.', e);
      });
    }

    render(){
			console.log('EditCategoryPage - render');
        return (
            <div>
              <h1>Category Edit Page</h1>
              <CategoryForm
								onSubmit={this.onSubmit}
								categoryItem={this.props.location.state.categoryItem}
              />
            </div>
        );
    }
}


