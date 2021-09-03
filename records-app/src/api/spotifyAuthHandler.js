import { CLIENT_ID, CLIENT_SECRET } from 'babel-dotenv';
import { authorize } from 'react-native-app-auth';

const config = {
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUrl: 'com.records:/oauth',
  response_type: 'code',
  scopes: [
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
  ], // the scopes you need to access
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

// const authState = await authorize(config);
