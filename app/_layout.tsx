import AuthContextProvider from "@/contexts/AuthContext";
import { socket } from "@/utils/socket";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export default function RootLayout() {

  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState('N/A');
  const [newMessage, setNewMessage] = useState(true)
  
  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      console.log("connected")
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on('upgrade', (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      console.log("disconnected")
      setIsConnected(false);
      setTransport('N/A');
    }

    function onMessage(value) {
      console.log(value)
    }

    function onError(value) {
      Alert.alert("Error", value)
      console.log(value)
    }
    
    function onRoomUpdate(value) {
      console.log(value)
    }
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('error', onError);
    socket.on('room_update', onRoomUpdate);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('error', onError);
      socket.off('room_update', onRoomUpdate);
    };
  }, []);

  return (
    <AuthContextProvider>
      <Stack>
        <Stack.Screen name="(auth)/index" options={{ headerShown: false }}/>
        <Stack.Screen name="(auth)/register" options={{ headerShown: false }}/>
        <Stack.Screen name="(user)/(tab)" options={{ headerShown: false }} />
      </Stack>
    </AuthContextProvider>
  );
}
