import React from 'react';
import firebase from "../../firebase/firebase3";
import {Table, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class LinkList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      linkItems: []
    }
  }

  componentDidMount(){
    this.getLinkData();
  }
  componentWillUnmount() {
    this.isUnmounted = true;
  }

  getLinkData(){
    console.log('LinkList - getLinkData')
    const query = firebase.database().ref('links').orderByChild('subCategoryId');
    query.on('value', (snapshot)=>{
      let result = [];
      snapshot.forEach((childSnapshot)=>{
          let key = childSnapshot.key;
          const obj = Object.assign({id:key}, childSnapshot.val());
          result.push(obj);
      });
      if(!this.isUnmounted){
        this.setState(()=>({linkItems: result}));
      }
    });
  }

  // compare = (a,b) => {
  //   if (a.subCategoryId < b.subCategoryId)
  //     return -1;
  //   if (a.subCategoryId > b.subCategoryId)
  //     return 1;
  //   return 0;
  // }


  handleDelete = (id) => {
    console.log('handleDelete');
    firebase.database().ref('links/' + id).remove()
      .then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
  }
  sortByCategory = (linkItems) =>{
    const sortedLinkItems = linkItems;
    sortedLinkItems.sort((a,b) => {
      if(a.categoryId == b.categoryId){ // if categoryID is same, sort by subCategoryId
        return (a.subCategoryId < b.subCategoryId) ? -1 : 1;
      }else{
        return (a.categoryId < b.categoryId) ? -1 : 1
      }
    });
    return sortedLinkItems;
  }  

  render(){
    //console.log('TestList - render');
    //console.log(this.state.linkItems);
    console.log(this.props.subCategoryItems);

    // Replacing subCategoryId to a title name.
    const linkCollection = this.state.linkItems.map(linkItem => {
      const found = this.props.subCategoryItems.find(item => linkItem.subCategoryId === item.subId);
      if(found !== undefined || found !== ''){
        linkItem['subCategoryTitle'] = found.title;
      }
      return linkItem;
    });
    // Sort by category and sub category
    const output = this.sortByCategory(linkCollection);

    return (
      <div>
        <Table className="dataViewTbl">
        <thead>
        <tr>
          <th>Category <i className="fas {this.state.isAscending ? 'fa-arrow-up' : 'fa-arrow-down'}"></i></th>
          <th>Sub Category</th>
          <th>Link</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {
          output.map(item =>{
            return (
              <tr key={item.id}>
                <td className="itemID">{item.categoryId}</td>
                <td className="itemTitle">{item.subCategoryTitle}</td>
                <td className="itemURL"><a href={item.url}>{item.urlName}</a></td>
                <td className="function-row">
                <Link to={{
                  pathname: `/admin/editLink/${item.id}`,
                  state: {linkItem: item}
                }}><Button className="editBtn">Edit</Button></Link>
                </td>                
                <td className="function-row"><Button onClick={()=>this.handleDelete(item.id)} className="deleteBtn">Delete</Button></td>
              </tr>
            )
          })
        }
        </tbody>
        </Table>
      </div>
    )
  }
}