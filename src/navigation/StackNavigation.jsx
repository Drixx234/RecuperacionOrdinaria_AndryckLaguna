import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from "../screens/inicio";
import Screen2 from "../screens/screen2"

const Stack = createNativeStackNavigator();
 
export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Screen1"
      screenOptions={{
        headerStyle: { backgroundColor: '#1a1a2e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerBackTitle: 'Regresar',
      }}
    >
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ title: 'Datos del Estudiante' }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ title: 'API' }}
      />
    </Stack.Navigator>
  );
}
