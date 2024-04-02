import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import api from "../services/api"

import ButtonContainer from "../components/utils/Button"
import InputContainer from "../components/utils/InputContainer"

function SingUpScreen(){

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigation = useNavigation()

    const submit = async () => {

        const data = {
            nome: nome,
            email: email,
            senha: senha,
            cpf: cpf,
            cep: null,
            estado: null,
            cidade: null,
            bairro: null,
            logadouro: null,
            numero_logadouro: null,
            data_nascimento: null,
            status:1,
            plano:'Ouro Individual',
            telefone:telefone,
            
        }

        try {
            await api.post('/adicionarAssociado', data) 
            navigation.navigate('Login')      
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
            placeholder="Nome:"
            value={nome}
            onChangeText={(newVal) => setNome(newVal)}
            />

            <InputContainer
            placeholder="CPF:"
            value={cpf}
            onChangeText={(newVal) => setCpf(newVal)}
            />

            <InputContainer
            placeholder="Telefone:"
            value={telefone}
            onChangeText={(newVal) => setTelefone(newVal)}
            />

            
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
            onPress={submit}
            title={'Cadastrar'}
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

    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:'50px', 
    },
    
    
    inputContainer:{
        alignItems:'center',
        justifyContent:'flex-start',
        height:'50px', 
    },

    input:{
        borderStyle:'solid',
        borderWidth:'0.1px',
        borderRadius:'4px',
        width:'200px',
    },

    passwordInput:{
        borderStyle:'solid',
        borderWidth:'0.1px',
        // borderRadius:'4px 0px 4px 0px ',
        width:'170px',
    },

    button:{
        alignItems:'center',
        justifyContent:'center',
        height:'35px',
        width:'200px',
        backgroundColor: '#3b5998',
        borderRadius:'8px'
    },

    buttonFont:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:"'22px"
    }

})

export default SingUpScreen