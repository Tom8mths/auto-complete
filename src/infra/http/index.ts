import axios from 'axios';

export function setupAPIClient() {
  const api = axios.create({
    baseURL: 'http://localhost:3004',
  });

  return api;
}
