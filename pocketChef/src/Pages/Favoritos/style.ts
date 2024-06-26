import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 18,
    alignContent: 'center',
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

  pratoContainer:{
    alignItems: 'center'
  },

  favoritosContainer: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 2,
    backgroundColor: '#d3d3d3',
    borderRadius: 15,
    padding: 5,
  },

  pratosCards: {
    width: 300,
    height: 200,
    borderRadius: 16,
    marginBottom: 20,
    position: "relative",
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
});
