import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { Text, Card } from "react-native-paper"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const HomeScreen = ({ navigation }) => {
  const menuItems = [
    { icon: "help-circle", text: "Questions", screen: "Questions" },
    { icon: "bell", text: "Reminders", screen: "Reminders" },
    { icon: "message", text: "Messages", screen: "Messages" },
    { icon: "calendar", text: "Calendar", screen: "Calendar" },
  ]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="menu" size={24} color="black" />
        <MaterialCommunityIcons name="bell" size={24} color="black" />
      </View>

      <View style={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => navigation.navigate(item.screen)}>
            <MaterialCommunityIcons name={item.icon} size={24} color="#4A90E2" />
            <Text>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Card style={styles.uploadCard}>
        <Card.Content>
          <Text style={styles.uploadTitle}>UPLOAD PRESCRIPTION</Text>
          <Text style={styles.uploadSubtitle}>Upload a Prescription and Tell us what you Need We do the Rest !</Text>
          <Text style={styles.discountText}>Flat 25% OFF ON MEDICINES</Text>
          <TouchableOpacity style={styles.orderButton} onPress={() => navigation.navigate("UploadPrescription")}>
            <Text style={styles.orderButtonText}>ORDER NOW</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <View style={styles.promotionSection}>
        <Card style={styles.promotionCard}>
          <Card.Content>
            <Text style={styles.promotionTitle}>Get the Best Medical Service</Text>
            <Text style={styles.promotionDescription}>
              Now less harm are system. Get instant or give medical help to keep them safe.
            </Text>
          </Card.Content>
        </Card>

        <Card style={[styles.promotionCard, styles.offerCard]}>
          <Card.Content>
            <Text style={styles.offerTitle}>80% offer</Text>
            <Text style={styles.offerSubtitle}>On Health Products</Text>
            <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.shopButtonText}>SHOP NOW</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    gap: 16,
  },
  menuItem: {
    width: "45%",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    gap: 8,
  },
  uploadCard: {
    margin: 16,
    backgroundColor: "white",
  },
  uploadTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  uploadSubtitle: {
    marginTop: 8,
    color: "#666",
  },
  discountText: {
    marginTop: 8,
    color: "#4A90E2",
  },
  orderButton: {
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  orderButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  promotionSection: {
    padding: 16,
    gap: 16,
  },
  promotionCard: {
    backgroundColor: "#E8F0FE",
  },
  promotionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  promotionDescription: {
    marginTop: 8,
    color: "#666",
  },
  offerCard: {
    backgroundColor: "#FFE8E8",
  },
  offerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E53935",
  },
  offerSubtitle: {
    color: "#666",
  },
  shopButton: {
    backgroundColor: "#E53935",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  shopButtonText: {
    color: "white",
    fontWeight: "bold",
  },
})

export default HomeScreen

