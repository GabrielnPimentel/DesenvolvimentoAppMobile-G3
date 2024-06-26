import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useAuth } from "../../Hooks/useAuth";
import angrySnorlax from "../../Assets/angrySnorlax.png"

export function ModalComponent() {

  const {modalAberto, setModalAberto} = useAuth();

  return (
    <Modal 
    transparent={true}
    visible={modalAberto}
    animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>

        <Image style={styles.modalImage} source={angrySnorlax}/>
        <Text style={styles.modalText}>Usuário ou senha incorretos</Text>
        <TouchableOpacity onPress={() => setModalAberto(!modalAberto)}
        style={styles.modalButton}>
          <Text style={{color: '#fff'}}>Tentar novamente</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
