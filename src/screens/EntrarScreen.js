import { Image, View, StyleSheet} from "react-native"
// import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonContainer from "../components/utils/Button";
import InputContainer from "../components/utils/InputContainer";
import api from "../services/api"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native";
import {setAssociadoStoredData} from '../services/GetStoredData'

// const {setAssociadoStoredData} = require('../services/GetStoredData')

function SingInScreen(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigation = useNavigation()
    // const setAssociado = setAssociadoStoredData()


    const validarAssociado = async () => {

        const auth = {
            email:email,
            senha:senha
        }
        try {
            console.log(auth)
            const { data } = await api.post('/validarAssociado', auth)
            if (data.response.code === 200 ){
                await setAssociadoStoredData(data.response.data[0])
                // console.log(data.response.data[0])
                // await AsyncStorage.setItem('ASSOCIADO', JSON.stringify(data.response.data[0]))
                navigation.navigate('Home')
            }
            // console.log(data)    
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

            <InputContainer
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