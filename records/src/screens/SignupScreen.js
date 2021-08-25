import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import SignupForm from '../components/SignupForm';

export const SignupScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title="Create Account" alignment="center" />
        <Divider />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardDismissMode={
            Platform.OS === 'ios' ? 'interactive' : 'on-drag'
          }
        >
          <Layout style={styles.layout}>
            <SignupForm navigation={navigation} />
          </Layout>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
