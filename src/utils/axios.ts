import axios from 'axios';

export const axiosMiddleware = (store) => (next) => (action) => {
  console.log('action:', action)
  return next(action)
}
