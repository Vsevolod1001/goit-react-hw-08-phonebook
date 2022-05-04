const getUserName = state => state.auth.user.name;

const getIsLoggedIn = state => state.auth.isLoggedin;

const authSelectors = { getIsLoggedIn, getUserName };

export default authSelectors;
