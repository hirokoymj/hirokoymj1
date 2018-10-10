import React from 'react';
import DocumentTitleRow from "./DocumentTitleRow";
import DocumentRow from './DocumentRow';
import {Table} from 'react-bootstrap';
import firebase from "../firebase/firebase3";

export default class DocumentList extends React.Component{
    constructor(props){
      super(props)
    }

    createTableRow(){
      const rows = [];
      let lastSubcategoryId = null;

      this.props.linkItems.forEach((item) => {
        if (item.subCategoryId !== lastSubcategoryId) {
          let title = this.convertSubCategoryIdToTitle(item.subCategoryId)
          rows.push(
            <DocumentTitleRow
            key={item.urlName}
            //title={item.subCategoryTitle}
            title={title}
            />
          );
        }
        rows.push(
          <DocumentRow
            key={item.id}
            documentItem={item}
            onDelete={this.onDelete}
            subCategoryItems={this.props.subCategoryItems}
          />
        );
        lastSubcategoryId = item.subCategoryId;        
      });
      return rows;
    }


    /**
     * Convert SubCategory ID to Title for LinkItem 
     * @param {string }id - subCategory ID
     * @example 
     * // SubCategoryItem Array
     * // {categoryId: "js", subId: "-LJ6UhaPPvtExhd2r_Yw", title: "Advanced JavaScript"}
     * @example
     * // LinkItems Array 
     * // {id: "-LJkWLeW1oarhFxw9IaM", categoryId: "js", subCategoryId: "-LJ6UhaPPvtExhd2r_Yw", url: "https://test.com", urlName: "test"}
     */   
    convertSubCategoryIdToTitle(id){
      let title = '';
      this.props.subCategoryItems.forEach(item=>{
        if(item.subId === id){
          title = item.title
        }
      })
      return title;
    }

    onDelete = (id)=>{
      console.log(`DocumentList - onDelete(${id})`);
      firebase.database().ref('links/' + id).remove()
        .then(()=>{
          console.log('Remove succeeded.');
        }).catch((error)=>{
          console.log("Remove failed: " + error.message)
        })
    }	

    render(){
      // console.log('DocumentList - render');
      // console.log(this.props.subCategoryItems);
      // console.log(this.props.linkItems);

      /**
       * Creating table rows
       */       
      const tableRow = this.createTableRow();
			return (
            <Table className="linkTbl">
              <tbody>
              {tableRow}
              </tbody>
            </Table>  
			);
    }
}
