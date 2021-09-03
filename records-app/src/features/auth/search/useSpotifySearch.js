import { useEffect, useState } from 'react';
import spotify from '../../../api/spotify';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchSpotify = async (searchTerm) => {
    console.log('searching spotify...');
    try {
      const response = await spotify.get('/search', {
        params: {
          q: searchTerm,
          // TODO: type: 'album,track'
          type: 'album',
          limit: 50,
        },
      });
      setResults(response.data.albums.items);
    } catch (err) {
      setErrorMsg('something isnt right...');
      console.log(err);
    }
  };

  return [searchSpotify, results, errorMsg];
};
