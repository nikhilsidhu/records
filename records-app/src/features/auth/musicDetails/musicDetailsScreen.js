import React from 'react';
import {
  Layout,
  Text,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Rating } from 'react-native-ratings';
import { default as theme } from '../../../../assets/records-theme.json';
import { listArtists } from '../listArtists';
import { TouchableOpacity } from 'react-native-gesture-handler';

// TODO: dynamic bkgd color
// import ImageColors from 'react-native-image-colors';

const BackIcon = (props) => <Icon {...props} name="arrow-ios-back" />;

const BackAction = () => {
  return <TopNavigationAction icon={BackIcon} onPress={() => alert('todo')} />;
};

const TopNavigationComponent = () => (
  <TopNavigation accessoryLeft={BackAction} />
);

const musicDetailsScreen = ({ navigation, route }) => {
  const { name, images, artists } = route.params.item;
  const ratingCompleted = (rating) => {
    console.log('rating is: ' + rating);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme['color-basic-800'] }}
    >
      <TopNavigationComponent />
      <Layout style={styles.container}>
        <Image source={{ uri: images[0].url }} style={styles.image} />
        <Layout style={styles.title}>
          <Text style={{ textAlign: 'center', marginBottom: 10 }} category="h1">
            {name}
          </Text>
          {listArtists(artists)}
          <Rating
            showRating
            onFinishRating={ratingCompleted}
            type="heart"
            tintColor={theme['color-basic-800']}
            style={{ paddingVertical: 10 }}
            ratingCount="5"
            imageSize={50}
            fractions={1}
            jumpValue={0.5}
          />
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

musicDetailsScreen.navigationOptions = ({ navigation }) => {
  return {};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 5,
    marginBottom: 15,
  },
});

export const getMusicDetails = (Stack) => {
  return (
    <Stack.Screen
      name="Music Details"
      component={musicDetailsScreen}
      options={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme['color-basic-800'],
        },
        title: '',
      }}
    />
  );
};
