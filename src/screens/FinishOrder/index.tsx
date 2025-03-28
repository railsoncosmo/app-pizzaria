import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

import { api } from "../../services/api";

type RouteDetailsParams = {
  FinishOrder: {
    number: number | string;
    order_id: string;
  };
};

type FinishOrderRouterProp = RouteProp<RouteDetailsParams, "FinishOrder">;

export default function FinishOrder({}) {
  const route = useRoute<FinishOrderRouterProp>();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  async function handleFinish() {
    try {
      await api.put("/order/send", {
        order_id: route.params?.order_id,
      });
      alert("Pedido finalizado com sucesso");
      navigation.popToTop();
    } catch (error) {
      console.log(error);
      alert("Erro ao finalizar o pedido");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar esse pedido ?</Text>
      <Text style={styles.title}>Mesa: {route.params?.number}</Text>
      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>Finalizar Pedido</Text>
        <Feather name="check-square" size={20} color="#1d1d2e" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "5%",
    paddingHorizontal: "4 %",
  },
  alert: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#3fffa3",
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: "bold",
    color: "#1d1d2e",
  },
});
