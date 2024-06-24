import { useNavigation } from '@react-navigation/native';
import React, { createContext, useContext, useState } from 'react'
import { Alert } from 'react-native';


export type PropsContext = {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    loginAuthentication: (email: string, password: string) => void;
}

//criador do contexto
const AuthContext = createContext<PropsContext>({
    email:'',
    setEmail: () => {},
    password:'',
    setPassword: () => {},
    loginAuthentication:() => {}
})

//o contexto de todo a aplicação esta aqui dentro do authProvider
export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    
    const navigator = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginAuthentication = (email: string, password: string) => {
    // if (email != "felipe" || password != "123"){
    //     Alert.alert("insira credenciais validas!")
    // } else{
    //     navigator.navigate('StackHome', { name: 'Home' })
    // }
    };

    return (
    //manda para o app tudo o que tem no criador do contexto
    //dentro do value eu coloco todas as informações que eu quero passar ao chamar esse hook
    <AuthContext.Provider value={{email, setEmail, password, setPassword, loginAuthentication}}>
        {children}
    </AuthContext.Provider>
  )
}

//otimiza e abrevia a chamada do contexto (criador do contexto)
export const useAuth = () => useContext(AuthContext)
