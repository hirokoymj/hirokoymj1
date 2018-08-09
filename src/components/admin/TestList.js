import React from 'react';
import firebase from "../../firebase/firebase3";
import {Table} from 'react-bootstrap';

export default class TestList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      linkItems: []
    }
  }

  componentDidMount(){
    this.getLinkData();
  }
  getLinkData(categoryId){
    const query = firebase.database().ref('links').orderByChild('categoryId');
    query.on('value', (snapshot)=>{
      let result = [];
      snapshot.forEach((childSnapshot)=>{
//        if(childSnapshot.val().categoryId === categoryId){
          let key = childSnapshot.key;
          const obj = Object.assign({id:key}, childSnapshot.val());
          result.push(obj);
//        }
      })
      console.log(result);
      this.setState(()=>({linkItems: result}));
    });
  }

  compare(a,b) {
    if (a.subcategoryId < b.subcategoryId)
      return -1;
    if (a.subcategoryId > b.subcategoryId)
      return 1;
    return 0;
  }
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

  render(){
    console.log('TestList - render');

    this.state.linkItems.sort(this.compare);

    const output = this.state.linkItems.map((linkItem)=>{
      const obj = this.props.subCategoryItems.find(subItem => linkItem.subcategoryId === subItem.subId )
      // console.log(obj);
      // console.log(obj.title);
      if(obj !== undefined){
        linkItem.subcategoryId = obj['title'];
      }
      return linkItem;
    });

    return (
      <div>
        <h1>List</h1>
        <Table responsive>
        <thead>
        <tr>
          <th>Category</th>
          <th>Sub Category</th>
          <th>Link</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
          output.map((item)=>{
            return (
              <tr key={item.id}>
                <td>{item.categoryId}</td>
                <td>{item.subcategoryId}</td>
                <td><a href={item.url}>{item.urlName}</a></td>
                <td><button onClick={()=>this.handleDelete(item.id)}>Delete</button></td>
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