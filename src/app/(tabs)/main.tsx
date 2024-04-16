import { View, Text, Pressable, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import { Link, Redirect } from 'expo-router';
import { styles } from '@/styles/styles';
import { AuthContext } from '@/context/ctx';

export default function Main() {
  const { userName, signOut } = useContext(AuthContext);

  if (userName == null) {
    return <Redirect href="/" />;
  }

  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Pressable onPress={() => signOut()}>
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
