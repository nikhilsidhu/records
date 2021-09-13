import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Rating } from 'react-native-ratings';
import { default as theme } from '../../../../assets/records-theme.json';

const musicDetailsScreen = ({ route }) => {
  const { name, images, artists } = route.params.item;
  const ratingCompleted = (rating) => {
    console.log('rating is: ' + rating);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme['color-basic-800'] }}
    >
      <Layout style={styles.container}>
        <Image source={{ uri: images[0].url }} style={styles.image} />
        <Layout style={styles.title}>
          <Text textAlign="center" writingDirection="rtl" category="h1">
            {name}
          </Text>
          <Text category="h6">{artists[0].name}</Text>
          <Rating
            showRating
            onFinishRating={ratingCompleted}
            type="heart"
            tintColor={theme['color-basic-800']}
            style={{ paddingVertical: 10 }}
            ratingCount="10"
            imageSize={25}
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
        cardStyle: { backgroundColor: '#22245B' },
      }}
    />
  );
};
