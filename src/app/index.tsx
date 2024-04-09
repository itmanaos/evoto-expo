import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function index() {
  return (
    <View>
      <Text>index</Text>
      <Link href={'/signin'}>Go to Login</Link>
      <Link href={'/atividades'}>Go to Atividades</Link>
      <Link href={'/equipes'}>Go to Equipes</Link>
      <Link href={'/dashboard'}>Go to Dashboard</Link>
    </View>
  );
}
