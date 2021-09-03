import axios from 'axios';
import spotifyToken from './spotifyToken';

const spotify = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

spotify.interceptors.request.use(
  async (req) => {
    try {
      // TODO: store this token?
      const token = await spotifyToken();
      req.headers.Authorization = `Bearer ${token}`;
    } catch (err) {
      console.log('request cancelled');
      throw new axios.Cancel('token invalid...');
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default spotify;
