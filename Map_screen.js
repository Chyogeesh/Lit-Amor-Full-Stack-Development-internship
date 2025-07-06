import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';

const GWALIOR_REGION = {
  latitude: 26.2183,
  longitude: 78.1828,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const HIDDEN_SPOTS = [
  {
    id: '1',
    title: 'Tansen’s Tomb',
    coordinates: { latitude: 26.2195, longitude: 78.1800 },
    vibe: 'Serene',
    description: 'A peaceful historical site with lush gardens, perfect for reflection.',
  },
  {
    id: '2',
    title: 'Sas-Bahu Temple',
    coordinates: { latitude: 26.2235, longitude: 78.1789 },
    vibe: 'Creative',
    description: 'Intricate architecture for art lovers and history buffs.',
  },
  {
    id: '3',
    title: 'Gujari Mahal',
    coordinates: { latitude: 26.2207, longitude: 78.1678 },
    vibe: 'Romantic',
    description: 'A quiet ruin with a romantic past, ideal for evening strolls.',
  },
  {
    id: '4',
    title: 'Phool Bagh',
    coordinates: { latitude: 26.2150, longitude: 78.1900 },
    vibe: 'Serene',
    description: 'A hidden garden with serene vibes, great for relaxation.',
  },
];

const MapScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required.');
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={GWALIOR_REGION}
        showsUserLocation={true}
      >
        {HIDDEN_SPOTS.map((spot) => (
          <Marker
            key={spot.id}
            coordinate={spot.coordinates}
            title={spot.title}
            description={spot.vibe}
            onPress={() => navigation.navigate('SpotDetails', { spot })}
            pinColor={spot.vibe === 'Romantic' ? 'red' : spot.vibe === 'Serene' ? 'green' : 'purple'}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

export default MapScreen;
