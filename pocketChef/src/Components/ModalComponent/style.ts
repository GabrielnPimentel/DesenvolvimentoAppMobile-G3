import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#eeeeee90",
    alignItems: "center",
    justifyContent: "center",
  },

  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  modalImage:{
    height: 180,
    width: 180
  },

  modalText: {
    color: '#ff0000'
  },

  modalButton:{
    width: '80%', height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', marginTop: 10, borderRadius: 10
  }
});
