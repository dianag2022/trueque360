import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { supabase } from '../../supabase.js'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './index.js';
type Props = StackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) Alert.alert('Error', error.message);
    else Alert.alert('Revisa tu correo para continuar.');
  };

  return (
    <View>
      <Text>Iniciar sesión</Text>
      <TextInput placeholder="Correo" value={email} onChangeText={setEmail} />
      <Button title="Enviar enlace de acceso" onPress={handleLogin} />
    </View>
  );
}
