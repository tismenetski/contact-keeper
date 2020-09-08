import axios from 'axios';

//  This function sets a global header for our token if one exists and automatically sends him with every request , if no token available we remove the header

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
