import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import  { GenerateBook } from "./modalBooker/app"

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/library.jpg")}
        style={styles.logo}
      />

      <Text style={styles.logoText}>Library</Text>

      <TouchableOpacity style={styles.button} onPress={GenerateBook}>
        <Text style={styles.buttonText}>Generate Book</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -350
  },

  logo: {
    width: 250,
    height: 250
  },

  logoText: {
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 50
  },

  button: {
    backgroundColor: '#f66a48',
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },

  buttonText: {
    color: "#fff",
    fontSize: 20
  }
})