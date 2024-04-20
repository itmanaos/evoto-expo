import { View, Text, Pressable, SafeAreaView } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import { styles } from '@/styles/styles';
import { AuthUse } from '@/context/ctx';

export default function Main() {
  const { isLoading, logOut, userData, globalLoading } = AuthUse();

  if (!userData) {
    router.replace('(auth)/signin/');
  }

  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Pressable onPress={() => logOut()}>
          <Text style={styles.textLink}>Logout</Text>
        </Pressable>
        <Link style={styles.textLink} href={'/atividades'}>
          Atividades
        </Link>
        <Link style={styles.textLink} href={'/ocorrencias'}>
          Ocorrencias
        </Link>
        <Link style={styles.textLink} href={'/pesquisa'}>
          Pesquisa
        </Link>
        <Link style={styles.textLink} href={'/pesquisa/detalhe'}>
          Pesquisa
        </Link>
        <Link style={styles.textLink} href={'/equipes'}>
          Equipes
        </Link>
        <Link style={styles.textLink} href={'/equipes/agenda'}>
          Equipes
        </Link>
        <Link style={styles.textLink} href={'/urnas'}>
          Urnas
        </Link>
      </View>
    </SafeAreaView>
  );
}
