import axios from 'axios';

export default axios.create({
  baseUrl: 'https://api.spotify.com/v1',
  // routes of interest
  // '/search'
  // '/tracks'
  // '/users/{userid}'
  // '/artists'
  // '/albums'
  // '/tracks'
  // '/libray' ?
  // '/browse' ?
});
