import React from 'react';
import firebase from "../firebase/firebase3";
import CategoryForm from './CategoryForm';


export default class AddCategory extends React.Component{
    onSubmit = (categoryItem)=>{
      console.log('AddCategoryPage - onSubmit');

      const {categoryId, categoryName} = categoryItem;
      // Add database
      firebase.database().ref('categories/' + categoryId).set({
        name: categoryName
      }).then(()=>{
        console.log('Data is saved!');
      }).catch((e)=>{
        console.log('This failed.', e);
      }) 
    }

    render(){
        return (
            <div>
              <CategoryForm
                onSubmit={this.onSubmit}
              />
            </div>
        );
    }
}


