import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pratoContainer: {
    marginVertical: 10,
  },
  pratosCards: {
    width: 260,
    height: 190,
    borderRadius: 16,
    marginRight: 16,
  },

  imgPrato: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },

  pratoInfo: {
    position: "absolute",
    justifyContent: "space-between",
    padding: 10,
    bottom: 10,
  },

  nomePrato: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  pratoDatas: {
    flexDirection: "row",
    gap: 12,
    zIndex: 1,
  },

  receitasCard: {
    width: 200,
    height: 240,
    borderRadius: 10,
    padding: 12,
    marginRight: 14,
    alignItems: "center",
    gap: 12,
  },

  imgPratoPop: {
    width: 160,
    height: 128,
    borderRadius: 12,
  },

  receitaNome: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  receitasContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
});
