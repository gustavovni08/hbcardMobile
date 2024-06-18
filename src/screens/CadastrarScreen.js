import { Image, View, StyleSheet, Alert } from "react-native"
import { ScrollView } from "react-native"
import { useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"

import { useGlobalContext } from "../services/context"
import api from "../services/api"

import ButtonContainer from "../components/utils/Button"
import InputContainer from "../components/utils/InputContainer"
import PasswordContainer from "../components/utils/passwordContainer"

function SingUpScreen(){

    const {setAssociado} = useGlobalContext()

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const route = useRoute()
    const plano = route.params.plano
    const navigation = useNavigation()
  


    const submit = async () => {

        const data = {
            nome: nome,
            email: email.toLocaleLowerCase(),
            senha: senha,
            cpf: cpf,
            cep: null,
            estado: null,
            cidade: null,
            bairro: null,
            logadouro: null,
            numero_logadouro: null,
            data_nascimento: null,
            status:0,
            plano:plano,
            telefone:telefone,
            
        }

        try {
            await api.post('/adicionarAssociado', data)
            setAssociado(data) 
            navigation.navigate('FormaDePagamento', {origin:"Cadastro", plano:plano})      
        } catch (error) {
            console.error(error)
            // Alert.alert(
            //     'Erro',
            //     'Cpf inválido.',
            //     [
            //       {text: 'Fechar', onPress: null},
            //     ],
            //     { cancelable: true }
            //   )
              window.alert('CPF inválido ou Dados duplicados')
        }
        
    }

    return(
        <ScrollView>
            <View style={styles.mainContainer}>
            {/* <View style={styles.imageContainer}>
                <Image source={require('../assets/logo.png')}/>
            </View> */}

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

            
            <PasswordContainer
            placeholder="Senha:"
            value={senha}
            onChangeText={(newVal) => setSenha(newVal)}
            />

            <ButtonContainer
            onPress={submit}
            title={'Cadastrar'}
            />        
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        height:600,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'#fff',
        marginBottom:30
    },

    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:300,

    },

    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:50, 
    },
    
    
    inputContainer:{
        alignItems:'center',
        justifyContent:'flex-start',
        height:50, 
    },

    input:{
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:4,
        width:200,
    },

    passwordInput:{
        borderStyle:'solid',
        borderWidth:1,
        // borderRadius:'4px 0px 4px 0px ',
        width:170,
    },

    button:{
        alignItems:'center',
        justifyContent:'center',
        height:35,
        width:200,
        backgroundColor: '#3b5998',
        borderRadius:8
    },

    buttonFont:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:22
    }

})

export default SingUpScreen