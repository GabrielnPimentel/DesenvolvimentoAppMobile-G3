import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#70B9BE",
  },
  container: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titulo: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  chefContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#daf7f7",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  chefImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  chefInfo: {
    marginLeft: 15,
    flex: 1,
  },
  chefName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  chefDescription: {
    marginTop: 5,
    fontSize: 12,
    color: "#383838",
  },
});
