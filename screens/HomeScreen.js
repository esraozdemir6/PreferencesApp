import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {user?.username}</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate("Settings")}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { marginTop: 12 }]}
        onPress={() => {
          logout();
          navigation.replace("Login");
        }}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  text: { fontSize: 20, marginBottom: 24 },
  button: { backgroundColor: "#333", padding: 12, borderRadius: 8, minWidth: 180 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});
