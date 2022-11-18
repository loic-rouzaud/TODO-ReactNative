import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Monalisa from "./assets/Monalisa.png";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myDiv}>
        <Text style={{ fontSize: 50, color: "white" }}>Edit Me !!!!!</Text>
      </View>
      <View>
        <Image source={Monalisa} style={{ width: 300, height: 300 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  myDiv: {
    alignItems: "center",
    backgroundColor: "blue",
    width: "80%",
    borderRadius: 10,
    marginBottom: 30,
  },
});
