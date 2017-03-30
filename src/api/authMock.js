import { AsyncStorage } from 'react-native';
import { STORAGE_KEYS } from '../constants/constants';

export const login = (username, password) => {
  const promise = new Promise((resolve, reject) => {
    resolve({
      data: {
        token: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
        me: {
          id: "3aa4d349-a31c-4788-a679-5cb506d839b4",
          username: username,
          profile: {
            email: "test@test.com",
            first_name: "John",
            last_name: "Doe",
            picture: "http://avatarmaker.com/svgavatars/temp-avatars/svgA4607216406771837.png",
          },
        },
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