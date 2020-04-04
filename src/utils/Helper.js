import validator from "validator";
import { DEFAULT_USER_AUTH } from './Consts';

export const apiRequest =  async (url, method, bodyParams) => {
  console.log("Calling rest api");
  return await fetch(url, {
     method : method,
     headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: bodyParams ? JSON.stringify(bodyParams) : undefined
  });
};

export const validateLoginForm = (email, password, setError) => {
  // Check for undefined or empty input fields
  if (!email || !password) {
      setError("Please enter a valid email and password.");
      return false;
  }
  // Validate email
  if (!validator.isEmail(email)) {
      setError("Please enter a valid email address.");
      return false;
  }
  return true;
};

export const getStoredUserAuth = () => {
  const auth = window.localStorage.getItem("UserAuth");
  if (auth) {
      return JSON.parse(auth);

  }
  return DEFAULT_USER_AUTH;
};
