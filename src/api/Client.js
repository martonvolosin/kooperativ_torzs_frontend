import 'react';
import { fbAuth } from '../config/Firebase.config';

class Client {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_BASE_URL;
  }

  register = async ({ email, password, name, phoneNumber, location }) => {
    const url = `${this.baseUrl}/addUser`;

    const fbResponse = await fbAuth.createUserWithEmailAndPassword(
      email,
      password,
    );

    const { uid } = fbResponse.user;
    const accessToken = await fbResponse.user.getIdToken();

    const apiResponse = await fetch(
      url,
      this.buildFetchObject({
        method: 'POST',
        body: JSON.stringify({
          email,
          name,
          phoneNumber,
          location,
        }),
        accessToken,
      }),
    );

    const json = await apiResponse.json();
    const data = this.handleResponse(json);

    if (data) {
      return { uid, accessToken };
    }

    return null;
  };

  login = async (email, password) => {
    const response = await fbAuth.signInWithEmailAndPassword(email, password);
    return response;
  };

  // Helper methods
  buildFetchObject = ({ method, body, accessToken }) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    };

    if (accessToken) {
      headers.authorization = `Bearer ${accessToken}`;
    }

    const fetchObject = {
      method,
      headers,
    };

    if (method === 'POST' && body) {
      fetchObject.body = body;
    }

    return fetchObject;
  };

  handleResponse = json => {
    switch (json.status) {
      case 200:
        return json.data;
      case 201:
        return true;
      case 400:
      case 401:
      case 403:
      case 404:
      case 409:
      case 500:
        throw new Error(`${json.status}, ${json.message}`);
      default:
        return null;
    }
  };
}

export default new Client();
