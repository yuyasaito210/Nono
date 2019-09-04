import axios from 'axios';
import config from '../utils/config';

const axiosCfg = { api_key: config.get('api_key') };

class AuthAPI {
  static signUp(data) {
    // eslint-disable-next-line no-undef
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    const url = `${config.get('api_base_url')}/user/api_register`;
    return axios.post(url, formData,
      {
        headers: {
          ...axiosCfg,
          'Content-Type': 'multipart/form-data',
        },
      })
      .catch((err) => {
        if (err.response.status === 402) {
          throw new Error('This Email Already Registered with us');
        }
        throw err;
      });
  }

  static login(email, password) {
    const url = `${config.get('api_base_url')}/user/api_auth_user`;
    // eslint-disable-next-line no-undef
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return axios.post(url, formData,
      {
        headers: {
          ...axiosCfg,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          throw new Error('Invalid details');
        }
        throw err;
      });
  }
}

export default AuthAPI;
