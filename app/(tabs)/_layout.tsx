import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#ffd33d" }}>
      <Tabs.Screen name="index" options={{ title: 'Inicio', tabBarIcon: ()=> <Ionicons name="home" size={30} />}} />
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="product" options={{ title: 'Producto' }} />
      <Tabs.Screen name="chat" options={{ title: 'Chat' }} />
    </Tabs>
  );
}
