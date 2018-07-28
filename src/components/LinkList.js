import React from 'react';
import LinkTitleRow from "./LinkTitleRow";
import LinkRow from './LinkRow';
//import {Table} from 'react-bootstrap';

export default class LinkList extends React.Component{
    convertToTitle(subcategoryId, subCategoryItems){
      console.log('convertToTitle');
      if(subCategoryItems.length !=0){
        const found = subCategoryItems.find((element)=>{
          return element.id === subcategoryId;
        });
        //console.log(found);
        if(found !== undefined){
          return found.title
        }else{
          return ''
        }
      }
    }  
    createTableRow(linkItems, subCategoryItems){
      const rows = [];
      let lastSubcategoryId = null;
      linkItems.forEach((item) => {
        if (item.subcategoryId !== lastSubcategoryId) {
          rows.push(
            <LinkTitleRow
              subcategoryTitle={this.convertToTitle(item.subcategoryId, subCategoryItems)}
              key={item.subcategoryId}
              />
          );
        }
        rows.push(
          <LinkRow
            url={item.url}
            urlName={item.urlName}
            key={item.id}
          />
        );
        lastSubcategoryId = item.subcategoryId;        
      });
      console.log(rows);
      return rows;
    }
    render(){
      console.log('LinkList - render');
      const subCategoryItems = this.props.subCategoryItems;
      const linkItems = this.props.linkItems;
      const tableRow = this.createTableRow(linkItems, subCategoryItems);
			return (
					<div>
            <table className="link-table">
              <tbody>
              {tableRow}
              </tbody>
            </table>  
					</div>
			);
    }
}
