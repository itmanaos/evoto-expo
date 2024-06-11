import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { AuthUse } from '@/context/ctx';
import MapView, { Marker } from 'react-native-maps';
import Header from '@/components/HeaderMain';
import TeamBoard from '@/components/TeamBoard';
import UrnasBoard from '@/components/UrnasBoard';

export default function Main() {
  const { isLoading, logOut, userData, globalLoading } = AuthUse();
  const [show, setShow] = useState(false);
  const [opcao, setOpcao] = useState<string>('team');
  const [corTeam, setCorTeam] = useState('#2FDBBC');
  const [corUrna, setCorUrna] = useState('gray');

  if (!userData) {
    router.replace('(auth)/signin/');
  }

  const triggerTeam = () => {
    setCorTeam('#2FDBBC');
    setCorUrna('gray');
    setShow(false);
  };

  const triggerUrna = () => {
    setCorUrna('#2FDBBC');
    setCorTeam('gray');
    setShow(true);
  };

  return (
    <>
      <Header name="Wilkens Figueiredo" onPress={logOut} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -3.07246642073,
          longitude: -59.9899985551,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -3.07246642073,
            longitude: -59.9899985551,
          }}
        />
      </MapView>
      <View style={styles.content}>
        <View style={styles.btLineContent}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.button, { backgroundColor: corTeam }]}
            onPress={triggerTeam}
          >
            <Text style={styles.buttonText}>Equipes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.button, { backgroundColor: corUrna }]}
            onPress={triggerUrna}
          >
            <Text style={styles.buttonText}>Urnas</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.boardContent}>{show ? <UrnasBoard /> : <TeamBoard />}</ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e1',
    marginTop: StatusBar.currentHeight || 0,
  },
  map: {
    flex: 3,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 2,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    fontSize: 14,
    paddingVertical: 10,
  },
  btLineContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textLink: {
    fontSize: 14,
    color: '#000',
  },
  button: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
  boardContent: {
    width: '100%',
    paddingHorizontal: 14,
  },
});
