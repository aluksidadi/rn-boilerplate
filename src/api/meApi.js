import {BASE_URI} from '../config';

export const get = (token) => {
  return fetch(`${BASE_URI}/api/v1/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${token}`,
    },
  });
}

export const updateMyProfile = (token, profile) => {
  return fetch(`${BASE_URI}/api/v1/me/profile`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(profile),
  });
}