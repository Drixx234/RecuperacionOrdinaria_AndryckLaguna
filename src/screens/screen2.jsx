import { FlatList, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useFetchData } from '../hooks/useFetchData';
import Card from '../components/Card';
import Loading from '../components/Loading';
 
const API_URL = 'https://api.tvmaze.com/shows';
 
export default function Pantalla2() {
  const { data, loading, error, refetch } = useFetchData(API_URL);
 
  if (loading) return <Loading message="Cargando..." />;
 
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}> {error}</Text>
        <TouchableOpacity style={styles.btn} onPress={refetch}>
          <Text style={styles.btnText}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            subtitle={`${item.status} · ${item.species}`}
            description={`Origen: ${item.origin?.name || 'Desconocido'} | Género: ${item.gender}`}
            imageUri={item.image}
          />
        )}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
 
      <TouchableOpacity style={styles.refreshBtn} onPress={refetch}>
        <Text style={styles.refreshText}> Recargar</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a2e' },
  error: { color: '#e94560', fontSize: 16, marginBottom: 20 },
  btn: { backgroundColor: '#e94560', padding: 12, borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: 'bold' },
  refreshBtn: { backgroundColor: '#e94560', padding: 14, alignItems: 'center' },
  refreshText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});