import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { supabase } from '../../supabase.js'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './index';

type Props = StackScreenProps<RootStackParamList, 'Product'>;

export default function ProductScreen({ navigation }: Props) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const handlePublicar = async () => {
    const { error } = await supabase.from('productos').insert([{ nombre, precio }]);
    if (error) Alert.alert('Error', error.message);
    else {
      Alert.alert('Producto publicado');
      navigation.goBack();
    }
  };

  return (
    <View>
      <Text>Publicar Producto</Text>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Precio" value={precio} onChangeText={setPrecio} keyboardType="numeric" />
      <Button title="Publicar" onPress={handlePublicar} />
    </View>
  );
}
