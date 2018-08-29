import React from 'react';
import firebase from "../firebase/firebase3";
import {Grid, Row, Col} from 'react-bootstrap';
import PageHeader from '../layout/PageHeader';
import TopNav from '../layout/TopNav';
import DocumentForm from './DocumentForm';
import DocumentList from './DocumentList';


export default class DocumentPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryId: this.props.match.params.id, //set param as categoryID
						subCategoryItems: [],
            linkItems: [],
            user: null
        }
    }
    componentDidMount(){
			this.getSubCategoryData(this.props.match.params.id);
      this.getLinkData(this.props.match.params.id);
		}

    componentDidUpdate(prevProps) {
      let categoryId = this.props.match.params.id;
      if (categoryId !== prevProps.match.params.id) {
        this.setState(()=>({categoryId}));
        this.getSubCategoryData(categoryId);
        this.getLinkData(categoryId);		
      }
    }    
    getSubCategoryData(categoryId){
      const query = firebase.database().ref(`subcategories/${categoryId}`).orderByKey();
      query.on('value', (snapshot)=>{
          const result = [];
          snapshot.forEach((childSnapshot => {
              let key = childSnapshot.key;
              let title = childSnapshot.val().title;
              const tmp = {
                categoryId: categoryId,
                subId: key,
                title: title
              }
              result.push(tmp);
          }));
          this.setState(()=>({subCategoryItems: result}));
        });	
    }
		getLinkData(categoryId){
			const query = firebase.database().ref('links').orderByChild('subCategoryId');
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
    onSubmit = (data)=>{
      console.log("onSubmit");
      firebase.database().ref('links').push(data)
      .then(()=>{
        console.log('success');
      }).catch((e)=>{
        console.log('Error', e);
      });      
    }
	
    render(){
			console.log('LinkPage - render');
			return (
        <div>
          <TopNav />
          <Grid fluid={true} className="page-header">
            <Grid>
                <Row>
                    <Col xs={12}>
                      <PageHeader pageTitle={this.props.match.params.id==='js' ? 'JavaScript' : this.props.match.params.id}/>
                    </Col>
                </Row>
            </Grid>
          </Grid>
          <Grid className="documentPage">
            <Row>
              <Col xs={12} sm={4} className="documentForm">
                <DocumentForm categoryId={this.props.match.params.id} subCategoryItems={this.state.subCategoryItems} onSubmit={this.onSubmit} />
              </Col>
              <Col xs={12} sm={8} className="documentList">
                <DocumentList subCategoryItems={this.state.subCategoryItems} linkItems={this.state.linkItems} />
              </Col>
            </Row>
          </Grid>
        </div>
			);
    }
}



