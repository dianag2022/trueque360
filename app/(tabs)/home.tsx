import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { supabase } from '../../supabase.js'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './index.js';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  vendedor: string;
}

export default function HomeScreen({ navigation }: Props) {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      let { data, error } = await supabase.from('productos').select('*');
      if (error) console.error(error);
      else setProductos(data as Producto[]);
    };
    fetchProductos();
  }, []);

  return (
    <View>
      <Text>Lista de productos</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { vendedor: item.vendedor })}>
            <Text>{item.nombre} - ${item.precio}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
