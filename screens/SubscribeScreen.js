import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import { validateEmail } from "../utils";

// Constants
const LOGO = require("../assets/little-lemon-logo-grey.png");
const COLORS = {
  primary: "#495E57",
  textLight: "#EDEFEE",
  disabled: "grey",
  border: "#ccc",
};
const STRINGS = {
  placeholder: "Email",
  button: "Subscribe",
  description: "Subscribe to our newsletter for our latest delicious recipes!",
  alert: "Thanks for subscribing, stay tuned!",
};

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsButtonDisabled(!validateEmail(text));
  };

  const handleSubscribe = () => {
    Alert.alert(STRINGS.alert);
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

      <Text style={styles.description}>{STRINGS.description}</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        placeholder={STRINGS.placeholder}
        keyboardType="email-address"
      />

      <Pressable
        onPress={handleSubscribe}
        disabled={isButtonDisabled}
        style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
      >
        <Text style={styles.buttonText}>{STRINGS.button}</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  logo: {
    height: 150,
    borderRadius: 20,
  },
  description: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 40,
    marginHorizontal: 30,
  },
  input: {
    height: 40,
    width: "85%",
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 10,
    fontSize: 15,
    borderRadius: 4,
    color: "grey",
    marginBottom: 20,
  },
  button: {
    width: "85%",
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  buttonDisabled: {
    backgroundColor: COLORS.disabled,
  },
  buttonText: {
    color: COLORS.textLight,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
