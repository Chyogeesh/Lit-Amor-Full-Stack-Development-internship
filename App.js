import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import SpotDetailsScreen from './screens/SpotDetailsScreen';
import SubmitSpotScreen from './screens/SubmitSpotScreen';
import FeedScreen from './screens/FeedScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Hidden Spots in Gwalior' }} />
        <Stack.Screen name="SpotDetails" component={SpotDetailsScreen} options={{ title: 'Spot Details' }} />
        <Stack.Screen name="SubmitSpot" component={SubmitSpotScreen} options={{ title: 'Share a Spot' }} />
        <Stack.Screen name="Feed" component={FeedScreen} options={{ title: 'Discover Feed' }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
