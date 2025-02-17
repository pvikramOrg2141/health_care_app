"use client"

import { useEffect } from "react"
import { View, StyleSheet } from "react-native"
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withRepeat } from "react-native-reanimated"
import { useNavigation } from "@react-navigation/native"
import { Text } from "react-native-paper"

const SplashScreen = () => {
  const navigation = useNavigation()
  const scale = useSharedValue(1)
  const translateY = useSharedValue(0)

  useEffect(() => {
    scale.value = withSpring(1.2)
    translateY.value = withRepeat(withSpring(-20), -1, true)

    const timer = setTimeout(() => {
      navigation.navigate("Login")
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigation, scale, translateY])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { translateY: translateY.value }],
    }
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, animatedStyle]}>
        <Text style={styles.logoText}>Healthcare</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2",
  },
})

export default SplashScreen


