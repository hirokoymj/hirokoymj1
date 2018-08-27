export const login = ({uid, displayName}) => ({
  type: 'LOGIN',
  uid,
  displayName
});

export const logout = () =>({
  type: 'LOGOUT'
});