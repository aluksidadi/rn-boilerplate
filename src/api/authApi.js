import {BASE_URI} from '../config';

export const login = (username, password) => {
  const data = {username, password};
  return fetch(`${BASE_URI}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
}

export const logout = (token) => {
  return fetch(`${BASE_URI}/api/v1/auth/logout`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${token}`,
    },
  });
}