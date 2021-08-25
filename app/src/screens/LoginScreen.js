import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import LoginForm from '../components/LoginForm';

export const LoginScreen = ({ navigation }) => {
  const navigateSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TopNavigation title="Login" alignment="center" />
        <Divider />
      </SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Layout style={styles.layout}>
          <LoginForm />
          <Button appearance="outline" onPress={navigateSignup}>
            Create Account
          </Button>
        </Layout>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// TODO:
// export default LoginScreen;
