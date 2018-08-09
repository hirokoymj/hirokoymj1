import React from 'react';
import firebase from "../firebase/firebase3";

export default class DocumentForm extends React.Component{
    constructor(){
        super();
        this.state = {
						subcategoryItems: []
        }
    }
    componentDidMount(){
      this.getSubCategoryData();
		}
		
		getSubCategoryData(){
      console.log('getSubCategoryData');
      const query = firebase.database().ref('subcategories').orderByKey();
      query.on('value', (snapshot)=>{
          const result = [];
          snapshot.forEach((childSnapshot => {
              const key = childSnapshot.key;              
              const obj = Object.assign({"id": key}, childSnapshot.val());
              result.push(obj);
          }));   
          this.setState(()=>({ subcategoryItems: result }));
          // console.log("result", result);
          // console.log(this.state.subcategoryItems);
        });				
		}

    render(){
      console.log('render()');
      console.log(this.state.subcategoryItems);
      const subcategoryItems = this.state.subcategoryItems;
      subcategoryItems.map((item)=>{
        console.log(item);
        Object.keys(item).map((key)=>{
          console.log(item[key]);
        })
      })      
        return (
          <div>
              <h1>Sub category list111</h1>
              <div>{this.state.subcategoryItems.length}</div>
              {
                subcategoryItems.map((item)=>{
                  <div>{item.id}</div>
                })
              }
          </div>
        );
    }
}

