import { AsyncStorage } from 'react-native';
import { BASE_URI } from '../config';
import { STORAGE_KEYS } from '../constants/constants';

export const login = (username, password) => {
  const data = { username, password };
  const promise = fetch(`${BASE_URI}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  return promise;
}

export const logout = () => {
  return AsyncStorage
    .getItem(STORAGE_KEYS.token)
    .then(token => {
      const promise = fetch(`${BASE_URI}/api/v1/auth/logout`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${token}`,
        },
      });
      return promise;
    });
}