import {Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
      
        }}
      />
     <Stack.Screen
      name="menu"
      options={{
        title: "Menu"
      }}
      />

    <Stack.Screen
      name="menuItem"
      options={{
        title: "MenuItem",
      }}
      />

    <Stack.Screen
      name="cart"
      options={{
        title: "Cart",
      }}
      />
    </Stack>
  );
}
