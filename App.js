import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigation';
import { StatusBar } from 'expo-status-bar';
 
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <StackNavigator />
    </NavigationContainer>
  );
}
 
