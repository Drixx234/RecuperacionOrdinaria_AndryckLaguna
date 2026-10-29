import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
 
export default function Loading({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#e94560" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
  text: { color: '#fff', marginTop: 12, fontSize: 14 },
});