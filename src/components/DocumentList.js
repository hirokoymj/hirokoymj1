import React from 'react';
import DocumentTitleRow from "./DocumentTitleRow";
import DocumentRow from './DocumentRow';
import {Table} from 'react-bootstrap';
import firebase from "../firebase/firebase3";

export default class DocumentList extends React.Component{
    constructor(props){
      super(props)
    }

    createTableRow(linkItems){
      const rows = [];
      let lastSubcategoryId = null;
      linkItems.forEach((item) => {
        if (item.subCategoryId !== lastSubcategoryId) {
          rows.push(
            <DocumentTitleRow
            key={item.urlName}
            title={item.subCategoryTitle}
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
      console.log('DocumentList - render');
      console.log(this.props.subCategoryItems);
      /**
       * Replacing subcategory ID to subcategory title.
       */      
      const output = this.props.linkItems.map((linkItem)=>{
        const obj = this.props.subCategoryItems.find((subItem) =>{ 
          return linkItem.subCategoryId === subItem.subId
        })
        if(obj !== undefined){
          linkItem['subCategoryTitle'] = obj['title'];
        }
        return linkItem;
      });
      console.log(output);

      /**
       * Creating table rows
       */       
      const tableRow = this.createTableRow(output);
			return (
            <Table className="linkTbl">
              <tbody>
              {tableRow}
              </tbody>
            </Table>  
			);
    }
}
