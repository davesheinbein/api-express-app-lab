const BASE_URL = '/api/users';

export function create(user) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(user)
    }).then(res => res.json());
  }