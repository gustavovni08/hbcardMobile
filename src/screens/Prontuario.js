import { View, StyleSheet, Alert, Dimensions } from "react-native"

import { useEffect, useState } from "react"
import { useNavigation, useIsFocused } from "@react-navigation/native"

// import { useRoute } from "@react-navigation/native"

// import ButtonContainer from "../components/utils/Button"
import ScrollAgendamento from "../components/../components/Home/ScrollAgendamentos"
import Footer from "../components/footer/Footer"

import api from "../services/api"
import { useGlobalContext } from "../services/context"

function Prontuario(){

    const [agendamentos, setAgendamentos] = useState([])
    const {associado} = useGlobalContext()
    const [width, setWidth] = useState()

    // const navigation = useNavigation()
    const isFocused = useIsFocused()
    // const route = useRoute()

    

    const getAgendamentos = async (userId) => {
        try {
            const {data} = await api.get('/listarAgendamentosPorId', {
                params:{
                    id:userId
                }
            })
    
            console.log(data.response)
            setAgendamentos(data.response)    
        } catch (error) {
            console.error(error)
        }
        
    }

    // const irParaAgendamento = () => {
    //     console.log(associado.STATUS)
    //     if(associado.STATUS === '1'){
    //         navigation.navigate('GuiaMedico')
    //     }else{
    //         Alert.alert(
    //             'Erro',
    //             'Status não disponível para agendamento',
    //             [
    //               {text: 'Fechar', onPress: null},
    //             ],
    //             { cancelable: true }
    //           )

    //         window.alert('status não disponível para pagamento')
    //     }
    // }

    // const validarAssociado = async () => {

    //     const origin = route.params.origin

    //     if(origin !== undefined || null){
    //         const auth = {
    //             email:associado.EMAIL,
    //             senha:associado.SENHA,
    //         }
    //         try {
    //             console.log(auth)
    //             const { data } = await api.post('/validarAssociado', auth)
    //             if (data.response.code === 200 ){
    //                 setAssociado(data.response.data[0])
                  
    //             }
    //         } catch (error) {
    //             console.error(error)
    //             window.alert('Usuário ou Senha inválidos')
    //         }
    //     }
       
        

    // }

    useEffect(() => {
        const effect = async ()=> {
            if(associado && associado.COD_ASSOCIADO) {
                // validarAssociado()
                getAgendamentos(associado.COD_ASSOCIADO)
            }
        } 
        if(isFocused){
            effect()
        }

        const screen = Dimensions.get('screen')
        console.log(screen.width)
        setWidth(screen.width)
    }, [isFocused])

    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>

            {agendamentos.length !== 0 && (
                <ScrollAgendamento
                lista={agendamentos}/>
            )}


            {/* <ButtonContainer
            title="Novo Agendamento"
            width='300px'
            height='50px'
            fontSize='22px'
            onPress={irParaAgendamento}
            /> */}

            

            </View>
{/* 
            <View>
              {width}
            </View> */}

            <Footer
            width={width}/>
  
            
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:'0.8',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:'80%'
    },

    container:{
        flex:'1',
        alignItems:'center',
        justifyContent:'space-between'
    },


    
})


export default Prontuario