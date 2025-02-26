import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigationContainerRef } from '@react-navigation/native';
import LoginScreen from './login';
import HomeScreen from './home';
import ChatScreen from './chat';
import ProductScreen from './product';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Chat: { vendedor: string };
  Product: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {

  const router = useRouter();
  return (
    <View>
    <Text>Pantalla de Inicio</Text>
    <Button title="Ir a Home" onPress={() => router.push('/(tabs)/home')} />
    <Link href={"/(tabs)/home"} style={styles.button}>Home Link</Link>
    <Button title="Ir a Productos" onPress={() => router.push('/(tabs)/product')} />
    <Button title="Chat con Juan" onPress={() => router.push({ pathname: '/(tabs)/chat', params: { vendedor: 'Juan' } })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
