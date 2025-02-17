import { View, StyleSheet, FlatList } from "react-native"
import { Text, Card } from "react-native-paper"

const prescriptions = [
  {
    id: "1",
    name: "Amoxicillin",
    dosage: "500mg",
    frequency: "Every 8 hours",
    image: "https://example.com/amoxicillin.jpg",
  },
  { id: "2", name: "Lisinopril", dosage: "10mg", frequency: "Once daily", image: "https://example.com/lisinopril.jpg" },
  // Add more prescriptions as needed
]

const RemindersScreen = () => {
  const renderPrescriptionItem = ({ item }) => (
    <Card style={styles.prescriptionCard}>
      <Card.Content>
        <View style={styles.prescriptionContent}>
          <View style={styles.prescriptionInfo}>
            <Text style={styles.prescriptionName}>{item.name}</Text>
            <Text style={styles.prescriptionDosage}>{item.dosage}</Text>
            <Text style={styles.prescriptionFrequency}>{item.frequency}</Text>
          </View>
          <Card.Cover source={{ uri: item.image }} style={styles.prescriptionImage} />
        </View>
      </Card.Content>
    </Card>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminders</Text>
      <FlatList
        data={prescriptions}
        renderItem={renderPrescriptionItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.prescriptionList}
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
  prescriptionList: {
    gap: 16,
  },
  prescriptionCard: {
    marginBottom: 10,
  },
  prescriptionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  prescriptionInfo: {
    flex: 1,
  },
  prescriptionName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  prescriptionDosage: {
    fontSize: 16,
    color: "#666",
  },
  prescriptionFrequency: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  prescriptionImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
})

export default RemindersScreen

