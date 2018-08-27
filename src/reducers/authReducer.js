// Authentication Reducer

const authDefaultState = {
  uid: '',
  displayName: ''
}

export default (state = authDefaultState, action) => {
  switch(action.type){
    case 'LOGIN':
      return {
        uid: action.uid,
        displayName: action.displayName
      }
    case 'LOGOUT':
      return {
        uid: '',
        displayName: ''
      }
    default:
      return state;          
  }
};


