import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import HomeScreen from "../screens/HomeScreen"
import MessagesScreen from "../screens/MessagesScreen"
import CalendarScreen from "../screens/CalendarScreen"
import PharmacyScreen from "../screens/PharmacyScreen"
import UploadPrescriptionScreen from "../screens/UploadPrescriptionScreen"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4A90E2",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="calendar" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadPrescriptionScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="file-upload" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="message" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Pharmacy" component={PharmacyScreen} />
      <Stack.Screen name="UploadPrescription" component={UploadPrescriptionScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator

