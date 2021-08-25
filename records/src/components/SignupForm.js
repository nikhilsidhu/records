import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { Input, Button } from '@ui-kitten/components';
import { useForm, Controller } from 'react-hook-form';

export default function LoginForm({ navigation }) {
  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            keyboardAppearance="dark"
            size="large"
            placeholder="Username"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="userName"
        defaultValue=""
      />
      {errors.userName && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            size="large"
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            size="large"
            placeholder="E-mail"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            size="large"
            placeholder="First Name"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
        defaultValue=""
      />
      {errors.firstName && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            size="large"
            placeholder="Last Name"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
        defaultValue=""
      />
      {errors.lastName && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 150,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            multiline={true}
            size="large"
            placeholder="Bio"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="bio"
        defaultValue=""
      />
      {errors.bio && <Text style={styles.error}>This is required.</Text>}

      <Button
        title="Submit"
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        Register
      </Button>
      <Button
        appearance="outline"
        style={styles.button}
        onPress={navigateLogin}
      >
        Back to Log In
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  input: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  button: {
    alignSelf: 'center',
    marginTop: 15,
  },
  error: {
    alignSelf: 'center',
    color: 'red',
    marginTop: 5,
  },
});
