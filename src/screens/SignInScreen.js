import { View, StyleSheet } from "react-native"
import ImageContainer from "../components/ImageContainer"
import LoginButton from "../components/LoginButton"
import InputContainer from "../components/InputContainer"
import PasswordContainer from "../components/passwordContainer"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import api from "../services/api"



function SignInScreen(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async () => {
        console.log(`email: ${email} senha: ${password}`)
        await autenticarUsuario()
        // navigation.navigate('Login')
    }

    const autenticarUsuario = async () => {
        try{
            const {data} = await api.post('/autenticarUsuario', {email, password})
            const cod = data.response.cod
            console.log(data)
            console.log(cod)

            if ( cod === 200 ){
                window.alert('Usuário autenticado com sucesso!')
            } 

            if ( cod === 401 ){
                window.alert('Email ou senha incorretos.')
            }

            return data

        } catch (error){
            if( error.response && error.response.status === 401) {
                window.alert('Email ou senha inválidos.')
            } else {
                console.error(error)
                window.alert('Erro interno do servidor, tente mais tarde.')
            }
        }
    }

    const navigation = useNavigation()

    return(
        <View style={styles.mainContainer}>
            <ImageContainer/>

            <InputContainer
                value={email}
                placeholder='Email:'
                onChange={(email) => setEmail(email)}
            />

            <PasswordContainer
                value={password}
                onChange={(password) => setPassword(password)}
            />

            <LoginButton
            title='Continuar'
            onPress={submit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
    },
})

export default SignInScreen