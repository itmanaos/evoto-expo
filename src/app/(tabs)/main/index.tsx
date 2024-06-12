import { View, StyleSheet, StatusBar, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { AuthUse } from '@/context/ctx';
import MapView, { Marker } from 'react-native-maps';
import HeaderMain from '@/components/HeaderMain';
import TeamBoard from '@/components/TeamBoard';
import UrnasBoard from '@/components/UrnasBoard';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <ScrollView style={styles.page}>
    <TeamBoard />
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={styles.page}>
    <UrnasBoard />
  </ScrollView>
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
    <View style={styles.background}>
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

      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#e1e1e1',
    marginTop: StatusBar.currentHeight || 0,
  },
  map: {
    flex: 1,
    width: '100%',
  },
  container: {
    width: '100%',
    height: 'auto',
  },
  page: {
    padding: 10,
    backgroundColor: '#fff',
  },
});
