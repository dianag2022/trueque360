import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './index';
import { useLocalSearchParams } from 'expo-router';

type Props = StackScreenProps<RootStackParamList, 'Chat'>;

interface Mensaje {
  id: number;
  texto: string;
}

export default function ChatScreen({ route }: Props) {
  const { vendedor } = useLocalSearchParams();
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);

  const enviarMensaje = () => {
    setMensajes([...mensajes, { id: mensajes.length + 1, texto: mensaje }]);
    setMensaje('');
  };

  return (
    <View>
      <Text>Chat con {vendedor}</Text>
      <FlatList data={mensajes} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <Text>{item.texto}</Text>} />
      <TextInput placeholder="Escribe un mensaje" value={mensaje} onChangeText={setMensaje} />
      <Button title="Enviar" onPress={enviarMensaje} />
    </View>
  );
}
