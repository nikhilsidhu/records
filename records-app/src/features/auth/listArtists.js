import React from 'react';
import { Text } from '@ui-kitten/components';

export const listArtists = (artists) => {
  const numArtists = artists.length;

  if (numArtists === 1) return <Text category="s1">{artists[0].name}</Text>;

  var artistList = '';
  for (var i = 0; i < numArtists; i++) {
    if (i === numArtists - 1) artistList += `& ${artists[i].name}`;
    else if (i === numArtists - 2) artistList += `${artists[i].name} `;
    else artistList += `${artists[i].name}, `;
  }
  return <Text category="s1">{artistList}</Text>;
};
