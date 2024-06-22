import React, { useState } from 'react'
import { ImageBackground, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import {styles} from '../Cadastro/style'
import { TextInputComponent } from '../../Components/TextInput';
import Icon from '@expo/vector-icons/Ionicons';
import IconDesign from '@expo/vector-icons/AntDesign'
import fundoCadastro from "../../Assets/fundoCadastro.jpeg"



function Cadastro() {
   
    const [email,setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    
    const handleEmail = (value:string) => {
        setEmail(value)
    }

    const handlePassword = (value:string) => {
        setEmail(value)
    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container}>

            
            <IconDesign name='left' size={25} style={styles.voltarIcon} />

            <Text style={styles.titulo}>
                    Cadastro
            </Text>

            <View>
                    <TextInputComponent
                        placeholder='Email'
                        onChangeValue={handleEmail}
                    />

                    <TextInputComponent
                        placeholder='Senha'
                        onChangeValue={handlePassword}
                        type={true}
                    />

            </View>

            <View>

            </View>

        </View>
        
    </TouchableWithoutFeedback>
  )
}

export default Cadastro