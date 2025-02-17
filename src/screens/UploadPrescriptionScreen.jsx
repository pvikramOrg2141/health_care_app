"use client"

import { useState } from "react"
import { View, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Text, Button } from "react-native-paper"
import * as ImagePicker from "expo-image-picker"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const UploadPrescriptionScreen = ({ navigation }) => {
  const [image, setImage] = useState(null)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const uploadImage = async () => {
    if (image) {
      const apiUrl = "YOUR_CLOUDINARY_UPLOAD_URL"
      const filename = image.split("/").pop()
      const match = /\.(\w+)$/.exec(filename)
      const type = match ? `image/${match[1]}` : `image`

      const formData = new FormData()
      formData.append("file", { uri: image, name: filename, type })
      formData.append("upload_preset", "YOUR_UPLOAD_PRESET")

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          body: formData,
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        const data = await response.json()
        console.log("Upload successful:", data.secure_url)
        // Handle successful upload (e.g., save URL to backend, navigate to confirmation screen)
      } catch (error) {
        console.error("Upload failed:", error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Prescription</Text>
      <Text style={styles.subtitle}>We will show the pharmacies that fits as per your prescription.</Text>

      <View style={styles.uploadOptions}>
        <TouchableOpacity style={styles.uploadOption}>
          <MaterialCommunityIcons name="link" size={24} color="#4A90E2" />
          <Text>Upload Link</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadOption} onPress={pickImage}>
          <MaterialCommunityIcons name="file-upload" size={24} color="#4A90E2" />
          <Text>Upload File</Text>
        </TouchableOpacity>
      </View>

      {image && <Image source={{ uri: image }} style={styles.previewImage} />}

      <Button mode="contained" onPress={uploadImage} style={styles.continueButton} disabled={!image}>
        Continue
      </Button>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  uploadOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  uploadOption: {
    alignItems: "center",
    padding: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  previewImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: "#4A90E2",
  },
})

export default UploadPrescriptionScreen

