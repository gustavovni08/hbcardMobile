import { Image, View, StyleSheet} from "react-native"

import ButtonContainer from "../components/utils/Button";
import InputContainer from "../components/utils/InputContainer";
import PasswordContainer from "../components/utils/passwordContainer";

import api from "../services/api"
import { useGlobalContext } from "../services/context";

import { useState } from "react"
import { useNavigation } from "@react-navigation/native";


function SingInScreen(){

    const { setAssociado } = useGlobalContext()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigation = useNavigation()


    const validarAssociado = async () => {

        const auth = {
            email:email,
            senha:senha
        }
        try {
            console.log(auth)
            const { data } = await api.post('/validarAssociado', auth)
            if (data.response.code === 200 ){
                setAssociado(data.response.data[0])
                navigation.navigate('Home')
            }
        } catch (error) {
            console.error(error)
        }
        

    }

    
    return(
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/logo.png')}/>
            </View>


            
            <InputContainer
            placeholder="Email:"
            value={email}
            onChangeText={(newVal) => setEmail(newVal)}
            />

            <PasswordContainer
            placeholder="Senha:"
            value={senha}
            onChangeText={(newVal) => setSenha(newVal)}
            />


            <ButtonContainer
            title='Entrar'
            onPress={validarAssociado}
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

    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:'300px',

    },



})

export default SingInScreen