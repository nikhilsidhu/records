import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { Image, StyleSheet } from 'react-native';
import { listArtists } from '../listArtists';

export default SearchResultCard = ({ result }) => {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 5,
      }}
    >
      <Layout
        style={{
          padding: 10,
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <Layout
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <Text category="h6">{result.name}</Text>
          <Text category="s1">by {listArtists(result.artists)}</Text>
        </Layout>
        <Image source={{ uri: result.images[0].url }} style={styles.image} />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginLeft: 5,
  },
});
