import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
 
export default function Pantalla1({ navigation }) {
 return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.icon} />
 
      <Text style={styles.title}>Información del Estudiante</Text>
 
      <View style={styles.card}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>Andryck laguna</Text>
 
        <Text style={styles.label}>Carnet:</Text>
        <Text style={styles.value}>20240136</Text>
 
        <Text style={styles.label}>Sección y Grupo:</Text>
        <Text style={styles.value}>3° "b" — Grupo 2</Text>

        <Text style={styles.label}>Recuperacion Ordinaria:</Text>
        <Text style={styles.value}>Desarrollo de componentes para dispositivos móviles.</Text>
        
      </View>
 
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen2')}
      >
        <Text style={styles.buttonText}>Ver siguientes</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  card: {
    backgroundColor: '#16213e',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#e94560',
  },
  label: { color: '#e94560', fontSize: 14, marginTop: 10, fontWeight: '600' },
  value: { color: '#fff', fontSize: 18, fontWeight: '600' },
  button: {
    backgroundColor: '#e94560',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 4,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});