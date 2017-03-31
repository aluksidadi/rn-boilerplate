import {BASE_URI} from '../config';

export const login = (username, password) => {
  const data = { username, password };
  const promise = fetch(`${BASE_URI}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
  return promise;
}

export const logout = (token) => {
  const promise = fetch(`${BASE_URI}/api/v1/auth/logout`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${token}`,
    },
  }).then((resp) => resp.json());
  return promise;
}