import React from 'react'
import { TextInput } from 'react-native'
import {styles} from '../TextInput/style'

interface PropsComponent {
    placeholder: string;
    type?: boolean;
    onChangeValue: (value: string) => void;
  }

export function TextInputComponent({ placeholder, type, onChangeValue}: PropsComponent){
    return (
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#97a2b0"}
        style={styles.estiloTextInput}
        secureTextEntry={type}
        onChangeText={onChangeValue}
      />
    )
  }