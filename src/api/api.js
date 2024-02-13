import { API_URL } from '../config';

export const API = {
  GET: (url) => fetch(`${API_URL}/${url}`).then((res) => res.json()),
  POST: (url, body) =>
    fetch(`${API_URL}/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }),
  PUT: (url, body) =>
    fetch(`${API_URL}/${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }),
  PATCH: (url, body) =>
    fetch(`${API_URL}/${url}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }),
  DELETE: (url) => fetch(`${API_URL}/${url}`, { method: 'DELETE' }),
};
