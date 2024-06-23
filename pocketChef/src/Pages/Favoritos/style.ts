import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#70B9BE",
  },
  usuarioNome: {
    fontSize: 20,
    color: "#fff",
  },
  favoritosContainer: {
    padding: 20,
  },
  favoritosCard: {
    margin: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    overflow: "hidden",
  },
  imgPrato: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  nomePrato: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});
