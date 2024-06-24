import React, { useState } from 'react'
import { Alert, Image, ImageBackground, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import {styles} from '../Cadastro/style'
import { TextInputComponent } from '../../Components/TextInput';
import IconDesign from '@expo/vector-icons/AntDesign'
import { ButtonComponent } from '../../Components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../Hooks/useAuth';



function Cadastro() {
   
    const {email, setEmail, password, setPassword, cadastroAuth} = useAuth();

    const navigator = useNavigation();
    
    const handleEmail = (value:string) => {
        setEmail(value)
    }

    const handlePassword = (value:string) => {
        setPassword(value)
    }

    const handleCadastro = () => {
        if (!email || !password) {
            Alert.alert('Preencha todos os campos.');
            return;
        }

        cadastroAuth(email, password);
    };

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigator.navigate("StackLogin", { name: "Login" })}>
                <IconDesign name='left' size={25} style={styles.voltarIcon} />
            </TouchableOpacity>

            <View style={styles.logo}>
                <Image source={require('./logo1.png')} style={styles.logoTamanho}/>
            </View>

            <Text style={styles.titulo}>
                    Cadastro
            </Text>

            <View>
                    <TextInputComponent
                        placeholder='Email'
                        onChangeValue={handleEmail}
                        value={email}
                    />

                    <TextInputComponent
                        placeholder='Senha'
                        onChangeValue={handlePassword}
                        type={true}
                        value={password}
                    />

                    <ButtonComponent
                    title='Cadastrar'
                    handleOnChange={handleCadastro}
                    />

            </View>

            <View>

            </View>

        </View>
        
    </TouchableWithoutFeedback>
  )
}

export default Cadastro