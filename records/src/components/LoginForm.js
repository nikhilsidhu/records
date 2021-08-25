import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from '@ui-kitten/components';
import { useForm, Controller } from 'react-hook-form';

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
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
      </KeyboardAvoidingView>

      <Button
        title="Submit"
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        Sign In
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  input: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  button: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  error: {
    alignSelf: 'center',
    color: 'red',
  },
});
