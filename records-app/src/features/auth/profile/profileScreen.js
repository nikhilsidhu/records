import React from 'react';
import { Layout, Text, Avatar, Button, Icon } from '@ui-kitten/components';
import {
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { StackScreen } from '../createStackScreen';

const FollowIcon = (props) => <Icon {...props} name="person-add-outline" />;

const profileScreen = () => (
  <Layout style={{ flex: 1 }}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Layout style={{ flex: 1, alignItems: 'center' }}>
          <Layout style={styles.profileTop}>
            <Layout style={styles.topInfo}>
              <Text style={styles.name} category="h2">
                @recordsUser
              </Text>
              <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="pin-outline" fill="grey" width={20} height={20} />
                <Text style={styles.location} category="p2">
                  Winnipeg, MB
                </Text>
              </Layout>
            </Layout>
            <Avatar
              style={styles.avatar}
              size="giant"
              source={require('../../../../assets/icon.png')}
            />
          </Layout>
          <Layout style={styles.follow}>
            <Button appearance="filled" accessoryLeft={FollowIcon}>
              FOLLOW
            </Button>
          </Layout>
        </Layout>
      </SafeAreaView>
    </KeyboardAvoidingView>
  </Layout>
);

// <ScrollView
//   contentContainerStyle={{ flexGrow: 1 }}
//   keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'}
// ></ScrollView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  profileTop: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  name: {
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  avatar: {
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  location: {
    color: 'grey',
  },
  follow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  topInfo: {
    alignItems: 'center',
  },
});

export const ProfileStackScreen = () => {
  return <StackScreen recordsScreen={profileScreen} screenName="Profile" />;
};
