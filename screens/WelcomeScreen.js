import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

// Constants
const LOGO = require("../assets/little-lemon-logo.png");
const DESCRIPTION = "Little Lemon, your local Mediterranean Bistro";
const COLORS = {
  primary: "#495E57",
  textLight: "#EDEFEE",
};

const WelcomeScreen = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate("Subscribe");
  };

  return (
    <View style={styles.container}>
      <Image
        source={LOGO}
        resizeMode="contain"
        accessible
        accessibilityLabel="Little Lemon Logo"
        style={styles.logo}
      />

      <Text style={styles.description}>{DESCRIPTION}</Text>

      <Pressable onPress={handleNavigate} style={styles.button}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 200,
    borderRadius: 20,
  },
  description: {
    marginVertical: 40,
    marginHorizontal: 32,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    bottom: 24,
    width: "90%",
    paddingVertical: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.textLight,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
