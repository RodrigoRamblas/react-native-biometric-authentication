import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import biometricsAuth from '../../utils/biometricsAuth';

export default function Login() {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
  return (
    <View style={styles.container}>
      <Text h1>Login</Text>
      <Input
      placeholder=" E-mail"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      />

    <Input
      secureTextEntry={true}
      placeholder=" Senha"
      leftIcon={{ type: 'font-awesome', name: 'key' }}
      onChangeText={value => setPassword(value)}
      keyboardType="email-address"
      />

    <Button
        icon={
        <Icon
        name="arrow-right"
        size={15}
        color="white"
        />
        }
    iconRight
    title="ENTRAR "
    onPress={() => biometricsAuth()}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
