import base64 from 'react-native-base64';
import { CLIENT_ID, CLIENT_SECRET } from 'babel-dotenv';

const apiPrefix = 'https://accounts.spotify.com/api';

const base64credentials = base64.encode(CLIENT_ID + ':' + CLIENT_SECRET);

export default async () => {
  console.log('token begin...');
  const res = await fetch(`${apiPrefix}/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${base64credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });
  const json = await res.json();
  const newToken = json.access_token;
  return newToken;
};
