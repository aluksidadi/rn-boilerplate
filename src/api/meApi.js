import { BASE_URI } from '../config';

export const get = (token) => {
  const promise = fetch(`${BASE_URI}/api/v1/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${token}`,
    },
  }).then((resp) => resp.json());
  return promise;
}