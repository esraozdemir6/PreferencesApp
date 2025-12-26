import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../hooks/useTheme";

export default function SettingsScreen({ navigation }) {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <View style={[styles.container, isDark ? styles.darkBg : styles.lightBg]}>
      <Text style={[styles.title, isDark ? styles.darkText : styles.lightText]}>
        Settings
      </Text>

      <Text style={[styles.text, isDark ? styles.darkText : styles.lightText]}>
        Logged in as: {user?.username}
      </Text>

      <Text style={[styles.text, isDark ? styles.darkText : styles.lightText]}>
        Theme: {theme}
      </Text>

      <Pressable
        style={[styles.button, isDark ? styles.darkBtn : styles.lightBtn]}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </Pressable>

      <Pressable
        style={[styles.button, isDark ? styles.darkBtn : styles.lightBtn, { marginTop: 12 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.logoutBtn, { marginTop: 12 }]}
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

  title: { fontSize: 24, marginBottom: 12 },
  text: { fontSize: 16, marginBottom: 12 },

  button: { padding: 12, borderRadius: 8, minWidth: 180 },
  buttonText: { textAlign: "center", fontWeight: "bold" },

  lightBg: { backgroundColor: "#fff" },
  darkBg: { backgroundColor: "#111" },

  lightText: { color: "#111" },
  darkText: { color: "#fff" },

  lightBtn: { backgroundColor: "#333" },
  darkBtn: { backgroundColor: "#444" },

  logoutBtn: { backgroundColor: "#a11" },
});
