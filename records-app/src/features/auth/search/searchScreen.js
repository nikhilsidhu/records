import React, { useState } from 'react';
import { Layout } from '@ui-kitten/components';
import SearchBar from './searchBar';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';
import useSpotifySearch from './useSpotifySearch';
import SearchResultList from './searchResultList';
import { StackScreen } from '../createStackScreen';

const searchScreen = () => {
  const [query, setQuery] = useState('');
  const [searchSpotify, results, errorMsg] = useSpotifySearch();

  const filterResultType = (type) => {
    // console.log(JSON.stringify(results, null, 2));
    // type === 'album' | 'track'
    return results.filter((result) => {
      return result.type === type && result.album_type === type;
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1, backgroundColor: '#222B45' }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={{ flex: 1 }}>
          <Layout
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <SearchBar
              term={query}
              onTermChange={setQuery}
              onTermSubmit={() => searchSpotify(query)}
              onClear={() => setQuery('')}
            />
          </Layout>
          <Layout style={{ flex: 1 }}>
            <SearchResultList results={filterResultType('album')} />
          </Layout>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const SearchStackScreen = () => {
  return <StackScreen recordsScreen={searchScreen} screenName="Search" />;
};
