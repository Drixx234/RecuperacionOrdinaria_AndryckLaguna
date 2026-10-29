import { View, Text, Image, StyleSheet } from 'react-native';
export default function Card({ title, subtitle, description, imageUri }) {
  return (
    <View style={styles.card}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
 
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {description && (
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        )}
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#16213e',
    marginHorizontal: 10,
    marginVertical: 6,
    borderRadius: 14,
    padding: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#e94560',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#0f3460',
  },
  content: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  subtitle: { color: '#e94560', fontSize: 13, marginTop: 4 },
  description: { color: '#a0a0a0', fontSize: 12, marginTop: 4 },
});
 
