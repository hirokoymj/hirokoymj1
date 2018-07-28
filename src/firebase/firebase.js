/** Firebase class for hirokoymj.com */
import * as firebase from 'firebase';

class FirebaseDB{
  constructor(){
    console.log('FirebaseDB - constructor()');
    const config = {
      apiKey: "AIzaSyCyphIPvAqNBzpNkXX7aIvSZU6GZwV0Rfg",
      authDomain: "expensify-c62bf.firebaseapp.com",
      databaseURL: "https://expensify-c62bf.firebaseio.com",
      projectId: "expensify-c62bf",
      storageBucket: "expensify-c62bf.appspot.com",
      messagingSenderId: "1047160116668"
    };
    firebase.initializeApp(config); 
  }
  
  /**
   * Get all categories data
   */   
  getCategoryData(){
    let result =[];
    const query = firebase.database().ref('categories').orderByKey();
    query.once('value')
      .then((snapshot)=>{
        snapshot.forEach((childSnapshot)=>{
          // console.log(childSnapshot.key);
          // console.log(childSnapshot.val());
          // console.log(childSnapshot.child('cname').val());
          let key = childSnapshot.key;
          const obj = Object.assign({cID: key}, childSnapshot.val());
          result.push(obj);
        })
      });
    return result;
  }


  /**
   * Get Sub Category data by category Id 
   * @param {string} categoryId - category ID.
   */ 
  getSubCategory(categoryId){
    const result = [];
    const query = firebase.database().ref('subcategories').orderByKey();
    query.once('value')
      .then((snapshot)=>{
        snapshot.forEach((childSnapshot => {
          if(childSnapshot.val().cID == categoryId){
            let key = childSnapshot.key;
            const obj = Object.assign({"subId": key}, childSnapshot.val());
            result.push(obj);
          }
        }))
      });
    return result;  
  }


  /**
   * Get all document link data for hirokoymj.com
   */ 
  getAllLinkData(){
    const result = [];
    const query = firebase.database().ref('links').orderByKey();
    query.once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          result.push(childSnapshot.val());
        });
      })
    return result;  
  } 


  /**
   * Get document link data
   */  
  getLinkData(param){
    const result = [];
    const query = firebase.database().ref('links').orderByKey();
    query.once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.val().cID === param){
            let key = childSnapshot.key;
            const obj = Object.assign({linkId: key}, childSnapshot.val());
            result.push(obj);
          }
        });
      })
    return result;  
  }

  /**
   * Get document link data by sub category Id
   * @param {string} subId - sub category ID.
   *
   */ 
  getLinkDataBySubCategoryId(subId){
    const result = [];
    const query = firebase.database().ref('links').orderByChild('subID');
    query.equalTo(subId).on('child_added', (snapshot)=>{
      result.push(snapshot.val());
    });
    return result;
  }


  /**
   * Create Category Data.
   * @param {string} cID - category ID.
   * @param {string} cname - category name.
   * @example
   * writeCategoryData('js', "JavaScript");
   */  
  writeCategoryData(cId, cname){
    firebase.database().ref('categories/' + cId).set({
      cname
    });
  }

  /**
   * Create SubCategory Data.
   * @param {string} subID - sub category ID.
   * @param {string} title - sub category title.
   * @param {string} cID - sub category ID.
   * @example
   * writeSubCategoryData('sub1', "Advanced JavaScript", "js");
   */    
  writeSubCategoryData(subID, title, cID){
    firebase.database().ref('subcategories/' + subID).set({
      title,
      cID
    })
  };

  /**
   * Create Link Data.
   * @param {string} linkId - Link ID.
   * @param {string} linkName - Link name.
   * @param {string} url - Link URL
   * @param {string} cID - category ID.
   * @param {string} subID - sub category ID.
   * @example
   * writeLinkData('link1', 'use strict', 'www.google.com', 'js', 'sub1');
   */  
  writeLinkData(linkId, linkName, url, cID, subID ){
    firebase.database().ref('links/' + linkId).set({
      linkName,
      url,
      cID,
      subID
    })
  };

  /**
   * Create expence data(Udemy tutorial)
   * @param {string} description
   * @param {string} note 
   * @param {string} amount
   * @param {string} createAt - generating milliseconds number using Date.now()
   * @example
   * writeExpenceData('Rent', '', '109500', Data.now())
   * writeExpenceData('Phone bill', '', '5900', Data.now())
   * writeExpenceData('Food', '', '1200', Data.now())
   */  
  writeExpenceData(description, note, amount, createAt){
    firebase.database().ref('expenses').set({
      description,
      note,
      amount,
      createAt
    })
  }  


  /**
   * Remove Data.
   * @param {string} reference - the location that you want to remove data.
   */ 
  removeData(reference){
    firebase.database().ref(reference).remove()
      .then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
  }

}// end of the class

 const myFirebase = new FirebaseDB();
const output1 = myFirebase.getCategoryData();
console.log(output1);
console.log( output1.length);

// const output3 = myFirebase.getLinkData('js');
// console.log(output3);

// output3.reduce(function(acc, data){
//   //var existing = acc.indexOf()
//   if(existing){
//     acc[existing].push(data);
//   }else{
//     var tmp = {};
//     tmp[data.subId] = [];
//     tmp[data.subId].push(data);
//     acc.push([tmp]);
//   }
//   return acc;
// }, []);

// const output2 = myFirebase.getSubCategory('html');
// console.log(output2);  
// console.log(output2.length);



// const createLinkDataBySubCategory = (array) =>{
//   console.log('call createLinkDataBySubCategory');
//   console.log("array!!");
//   console.log(array);
//   console.log(array[0]);

// }

// createLinkDataBySubCategory(output2);



// const documentArray = [];
// const output4 = myFirebase.getLinkDataBySubCategoryId('sub1');
// documentArray.push(output4);

// const output5 = myFirebase.getLinkDataBySubCategoryId('sub2');
// documentArray.push(output5);

// const output6 = myFirebase.getLinkDataBySubCategoryId('sub3');
// documentArray.push(output6);

// console.log(documentArray);




