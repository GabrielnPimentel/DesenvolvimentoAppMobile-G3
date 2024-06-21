import React, { useState } from 'react'
import { Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import {styles} from '../Cadastro/style'


function Cadastro() {
   
    const [email,setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    
    const handleEmail = (value:string) => {
        setEmail(value)
    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container}>
            
            <Text style={styles.titulo}>
                Cadastro
            </Text>

            <View>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor={"#ffffff"}
                    style={styles.email}
                    onChangeText={handleEmail}
                    />

                <TextInput
                    placeholder='Senha'
                    placeholderTextColor={"#ffffff"}
                    style={styles.senha}
                    onChangeText={handleEmail}
                    />
            </View>

        </View>
        
    </TouchableWithoutFeedback>
  )
}

export default Cadastro