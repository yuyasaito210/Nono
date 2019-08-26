/* eslint-disable no-undef */
import axios from 'axios';
import config from '../utils/config';

const axiosCfg = { api_key: config.get('api_key') };

export default class LocationAPI {
  static getAll(userId) {
    const url = `${config.get('api_base_url')}/user/get_all_data?users_id=${userId}`;
    return axios.get(url)
      .then(response => response.data)
      .catch((err) => { throw err; });
  }

  static addLocationToTrip(userId, locationId) {
    const url = `${config.get('api_base_url')}/trip/add`;
    const formData = new FormData();
    formData.append('location_id', locationId);
    formData.append('users_id', userId);
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
