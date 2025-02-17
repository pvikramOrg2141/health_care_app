import { View, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native"
import { Text, Card } from "react-native-paper"

const pharmacies = [
  { id: "1", name: "Path Lab Pharmacy", distance: "0.5 km", image: "https://example.com/path-lab.jpg" },
  { id: "2", name: "24 Pharmacy", distance: "1.2 km", image: "https://example.com/24-pharmacy.jpg" },
  // Add more pharmacies as needed
]

const PharmacyScreen = ({ navigation }) => {
  const renderPharmacyItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("PharmacyDetail", { pharmacy: item })}>
      <Card style={styles.pharmacyCard}>
        <Card.Content style={styles.pharmacyContent}>
          <Image source={{ uri: item.image }} style={styles.pharmacyImage} />
          <View style={styles.pharmacyInfo}>
            <Text style={styles.pharmacyName}>{item.name}</Text>
            <Text style={styles.pharmacyDistance}>{item.distance}</Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pharmacy Nearby</Text>
      <FlatList
        data={pharmacies}
        renderItem={renderPharmacyItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.pharmacyList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pharmacyList: {
    gap: 16,
  },
  pharmacyCard: {
    marginBottom: 10,
  },
  pharmacyContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  pharmacyImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  pharmacyInfo: {
    flex: 1,
  },
  pharmacyName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pharmacyDistance: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
})

export default PharmacyScreen

