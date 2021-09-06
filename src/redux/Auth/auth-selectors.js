const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
const getUserEmail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrent,
};
export default authSelectors;
