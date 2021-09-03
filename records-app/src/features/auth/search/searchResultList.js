import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import SearchResultCard from './searchResultCard';

export default SearchResultList = ({ results, navigation }) => {
  if (!results.length) return null;

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <SearchResultCard result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};
