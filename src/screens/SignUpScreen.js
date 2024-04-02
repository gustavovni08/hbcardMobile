import { View, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import LoginButton from "../components/LoginButton"
import PasswordContainer from "../components/passwordContainer"
import InputContainer from "../components/InputContainer"
import ImageContainer from "../components/ImageContainer"
import api from "../services/api"

function SingUpScreen(){
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const cadastrarUsuarios = async () => {
        try {
            const {data} = await api.post('/adicionarUsuario', {email, password})
            return data
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    const submit = async () => {
        console.log(`email: ${email} senha: ${password}`)
        await cadastrarUsuarios()
        navigation.navigate('Login')
    }


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
            onPress={submit}
            />
            
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

export default SingUpScreen