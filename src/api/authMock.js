import { AsyncStorage } from 'react-native';
import { STORAGE_KEYS } from '../constants/constants';

export const login = (username, password) => {
  const promise = new Promise((resolve, reject) => {
    resolve({
      data: {
        token: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
      },
    });
  });
  return promise;
}

export const logout = () => {
  return AsyncStorage
    .getItem(STORAGE_KEYS.token)
    .then(token => {
      const promise = new Promise((resolve, reject) => {
        resolve({data: null});
      });
      return promise;
    });
}