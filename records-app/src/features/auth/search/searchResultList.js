import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import SearchResultCard from './searchResultCard';
import { useNavigation } from '@react-navigation/native';

export default SearchResultList = ({ results }) => {
  if (!results.length) return null;
  const navigation = useNavigation();
  console.log(results[0]);

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Music Details', { item: item })
              }
            >
              <SearchResultCard result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};
