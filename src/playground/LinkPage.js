import React from 'react';
import firebase from "../firebase/firebase3";
import {Grid, Row, Col} from 'react-bootstrap';
import LinkForm from "./LinkForm";
import LinkList from './LinkList';


export default class LinkPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryId: this.props.match.params.id, //set param as categoryID
						subCategoryItems: [],
						linkItems: [],
						subcategoryId: ''
				}
				//this.removeData('links');
    }
    componentDidMount(){
			this.getSubCategoryData(this.state.categoryId);
			this.getLinkData(this.state.categoryId);
		}
		removeData(refName){
			firebase.database().ref(refName).remove();
		}
    componentWillReceiveProps(nextProps){
      console.log("LinkPage - componentWillReceiveProps()");
      console.log(nextProps.match.params.id)
			let categoryId = nextProps.match.params.id;
			this.setState(()=>({categoryId}));
      this.getSubCategoryData(categoryId);
      this.getLinkData(categoryId);			
		}
		getSubCategoryData(categoryId){
      console.log(`getSubCategoryData(${categoryId})`);
			const query = firebase.database().ref('subcategories/'+ categoryId).orderByKey();
			query.on('value', (snapshot)=>{
				const result = [];
				snapshot.forEach((childSnapshot)=>{
						let key = childSnapshot.key;
						const obj = Object.assign({id:key}, childSnapshot.val());
						result.push(obj);
				})
				this.setState(()=>({subCategoryItems: result}));
				if(result.length != 0){
					this.setState(()=>({subcategoryId: result[0].id}));
				}
			})
		}
		getLinkData(categoryId){
			const query = firebase.database().ref('links').orderByChild('subcategoryId');
			query.on('value', (snapshot)=>{
        let result = [];
        snapshot.forEach((childSnapshot)=>{
          if(childSnapshot.val().categoryId === categoryId){
            let key = childSnapshot.key;
            const obj = Object.assign({id:key}, childSnapshot.val());
            result.push(obj);
          }
        })
				this.setState(()=>({linkItems: result}));
      });
		}		
    render(){
			console.log('LinkPage - render');
			return (
        <div>
          <Grid className="documentPage">
            <Row>
              <Col xs={12} sm={4} className="link-form">
                <LinkForm categoryId={this.state.categoryId} subCategoryItems={this.state.subCategoryItems} subcategoryId={this.state.subcategoryId} />
              </Col>
              <Col xs={12} sm={8} className="link-view">
                <LinkList subCategoryItems={this.state.subCategoryItems} linkItems={this.state.linkItems} />
              </Col>
            </Row>
          </Grid>
        </div>
			);
    }
}

// <Grid fluid={true} className="page-header">
// <Grid>
//     <Row>
//         <Col xs={12}>
//         <h1>
//         {
//             props.category == null ? <span>{props.title}</span> : <span>{props.category}</span>
//         }
//         </h1>
//         </Col>
//     </Row>
// </Grid>
// </Grid>

