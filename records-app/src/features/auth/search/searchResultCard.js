import React from 'react';
import { Card, Divider, Layout, Text } from '@ui-kitten/components';
import { Image, StyleSheet } from 'react-native';

export default SearchResultCard = ({ result }) => {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 5,
        marginHorizontal: 5,
      }}
    >
      <Card style={{ flex: 1 }}>
        <Layout
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Layout style={{ flex: 1, justifyContent: 'center' }}>
            <Text>{result.name}</Text>
            <Text>by {result.artists[0].name}</Text>
          </Layout>
          <Image source={{ uri: result.images[0].url }} style={styles.image} />
        </Layout>
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
});
