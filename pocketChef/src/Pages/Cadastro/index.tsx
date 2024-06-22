import React, { useState } from 'react'
import { ImageBackground, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'
import {styles} from '../Cadastro/style'
import { TextInputComponent } from '../../Components/TextInput';
import IconDesign from '@expo/vector-icons/AntDesign'
import { ButtonComponent } from '../../Components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';



function Cadastro() {
   
    const [email,setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const navigator = useNavigation();
    
    const handleEmail = (value:string) => {
        setEmail(value)
    }

    const handlePassword = (value:string) => {
        setPassword(value)
    }

    const handleLogin = () => {
        navigator.navigate("StackLogin", { name: "Login" });
      };

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

                    <ButtonComponent
                    title='Cadastrar'
                    handleOnChange={handleLogin}
                    />

            </View>

            <View>

            </View>

        </View>
        
    </TouchableWithoutFeedback>
  )
}

export default Cadastro