import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const musicDetailsScreen = ({ route }) => {
  const { name, images, artists } = route.params.item;

  return (
    <View style={{ flex: 1, backgroundColor: '#222B45' }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#222B45' }}>
        <Layout style={styles.container}>
          <Image source={{ uri: images[0].url }} style={styles.image} />
          <Layout style={styles.title}>
            <Text textAlign="center" writingDirection="rtl" category="h1">
              {name}
            </Text>
            <Text category="h6">{artists[0].name}</Text>
          </Layout>
        </Layout>
      </SafeAreaView>
    </View>
  );
};

musicDetailsScreen.navigationOptions = ({ navigation }) => {
  return {};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
