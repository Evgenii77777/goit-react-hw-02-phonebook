const getAuthsSelector = (state) => state.auth.token.idToken;
const getEmailSelector = (state) => state.auth.token.email;
export { getAuthsSelector, getEmailSelector };
