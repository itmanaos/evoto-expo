import { View, StyleSheet, StatusBar, Dimensions } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { AuthUse } from '@/context/ctx';
import MapView, { Marker } from 'react-native-maps';
import HeaderMain from '@/components/HeaderMain';
import TeamBoard from '@/components/TeamBoard';
import UrnasBoard from '@/components/UrnasBoard';
import { NativeBaseProvider } from 'native-base';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={styles.page}>
    <TeamBoard />
  </View>
);

const SecondRoute = () => (
  <View style={styles.page}>
    <UrnasBoard />
  </View>
);

const initialLayout = {
  width: Dimensions.get('window').width,
};

export default function Main() {
  const { isLoading, logOut, userData, globalLoading } = AuthUse();

  if (!userData) {
    router.replace('(auth)/signin/');
  }

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Equipes' },
    { key: 'second', title: 'Urnas' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#2FDBBC' }}
      style={{ backgroundColor: 'white' }}
      labelStyle={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}
    />
  );

  return (
    <NativeBaseProvider>
      <HeaderMain name="Wilkens Figueiredo" onPress={logOut} />
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
      <View style={styles.container}>
        <TabView
          navigationState={{ index, routes }}
          renderTabBar={renderTabBar}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </View>
    </NativeBaseProvider>
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
    fontSize: 12,
    paddingVertical: 10,
  },
  btLineContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textLink: {
    fontSize: 12,
    color: '#000',
  },
  button: {
    flex: 1,
    padding: 14,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
  },
  boardContent: {
    width: '100%',
    paddingHorizontal: 14,
  },
  container: {
    flex: 2,
  },
  page: {
    padding: 8,
  },
});
