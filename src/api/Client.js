import { fbAuth } from '../config/Firebase.config';

class Client {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_BASE_URL;
  }

  register = async (email, password) => {
    const fbResponse = await fbAuth.createUserWithEmailAndPassword(
      email,
      password,
    );

    return fbResponse;
  };

  login = async (email, password) => {
    const response = await fbAuth.signInWithEmailAndPassword(email, password);
    return response;
  };

  // Helper methods
  buildFetchObject = ({ method, body }) => {
    const fetchObject = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: 'Bearer',
      },
    };

    if (method === 'POST' && body) {
      fetchObject.body = body;
    }

    return fetchObject;
  };
}

export default new Client();
