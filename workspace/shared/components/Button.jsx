import React from "react";
import { Pressable, Text } from "react-native";

export const Button = ({ title, onPress }) => (
  <Pressable onPress={onPress} style={{ padding: 10, backgroundColor: "blue" }}>
    <Text style={{ color: "white" }}>{title}</Text>
  </Pressable>
);
