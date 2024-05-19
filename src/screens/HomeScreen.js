import { View, StyleSheet} from "react-native"

import { useEffect, useState } from "react"
import { useNavigation, useIsFocused } from "@react-navigation/native"

import ButtonContainer from "../components/utils/Button"
import ScrollAgendamento from "../components/../components/Home/ScrollAgendamentos"

import api from "../services/api"
import { useGlobalContext } from "../services/context"

function HomeScreen(){

    const [agendamentos, setAgendamentos] = useState([])
    const {associado} = useGlobalContext()

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    // const getUser = async () =>{
    //     try {
    //         const userData = await AsyncStorage.getItem('ASSOCIADO')
    //         console.log(JSON.parse(userData))
    //         return JSON.parse(userData)
    
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

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


    useEffect(() => {
        const effect = async ()=> {
            // const user = await getUser()
            // setUser(user)

            if(associado && associado.COD_ASSOCIADO) {
                getAgendamentos(associado.COD_ASSOCIADO)
            }
        } 
        if(isFocused){
            effect()
        }
    }, [isFocused])

    return(
        <View style={styles.mainContainer}>

            {agendamentos.length !== 0 && (
                <ScrollAgendamento
                lista={agendamentos}/>
            )}


            <ButtonContainer
            title="Novo Agendamento"
            width='300px'
            height='50px'
            fontSize='22px'
            onPress={()=>(navigation.navigate('GuiaMedico'))}
            />

        </View>
        
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:'1',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    
})


export default HomeScreen