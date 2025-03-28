import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { CategoryProps, ProductsProps } from "../../screens/Order/index";

interface ModalPickerProps {
  options: CategoryProps[] | ProductsProps[];
  handleCloseModal: () => void;
  selectedItem: (item: CategoryProps | ProductsProps) => void;
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export function ModalPicker({
  options,
  handleCloseModal,
  selectedItem,
}: ModalPickerProps) {
  function onPressItem(item: CategoryProps) {
    selectedItem(item);
    handleCloseModal();
  }

  const option = options.map((item, index) => (
    <TouchableOpacity
      style={styles.option}
      key={index}
      onPress={() => onPressItem(item)}
    >
      <Text style={styles.item}>{item?.name}</Text>
    </TouchableOpacity>
  ));

  return (
    <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: WIDTH - 20,
    height: HEIGHT / 2,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#8a8a8a",
  },
  option: {
    alignItems: "flex-start",
    borderTopWidth: 0.8,
    borderTopColor: "#8a8a8a",
  },
  item: {
    margin: 18,
    fontSize: 14,
    fontWeight: "bold",
    color: "#101026",
  },
});
