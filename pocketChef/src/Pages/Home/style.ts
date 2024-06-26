import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 18,
    marginHorizontal: 25,
  },

  categoriaContainer: {
    marginTop: 10,
    gap: 12,
  },

  categoriaTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  categoriaCard: {
    backgroundColor: "#70B9BE",
    borderRadius: 40,
    padding: 10,
    marginRight: 10,
  },

  categoriaCardSelected: {
    borderColor: "#d3d3d3", 
    borderWidth: 3,
  },

  nomeCategoria: {
    fontSize: 16,
    backgroundColor: "#70B9BE",
  },
});
