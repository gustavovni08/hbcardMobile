import { View, Text, StyleSheet} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from "react"
import { useNavigation, useIsFocused } from "@react-navigation/native"
import ButtonContainer from "../components/utils/Button"
import CardAgendamento from "../components/Home/CardAgendamento"
import api from "../services/api"

function HomeScreen(){

    const [agendamentos, setAgendamentos] = useState([])
    const [user, setUser] = useState({})

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    const getUser = async () =>{
        try {
            const userData = await AsyncStorage.getItem('ASSOCIADO')
            console.log(JSON.parse(userData))
            return JSON.parse(userData)
    
        } catch (error) {
            console.error(error)
        }
    }

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
            const user = await getUser()
            setUser(user)

            if(user && user.COD_ASSOCIADO) {
                getAgendamentos(user.COD_ASSOCIADO)
            }
        } 
        if(isFocused){
            effect()
        }
    }, [isFocused])

    return(
        <View style={styles.mainContainer}>
            {user && (
                <View>
                {/* <Text>Bem Vindo, {user.NOME_ASSOCIADO}</Text>
                <Text>Seus Agendamentos</Text> */}
                {agendamentos.map(agendamento =>{
                return(
                    <View key={agendamento.COD_CONSULTA}>
                        <CardAgendamento
                        title={agendamento.DESCRICAO}
                        data={agendamento.DATA.split('-')[1]}
                        />
                    </View>
                )
                })}
                {agendamentos.length === 0 && (
                <Text>
                    sem agendamentos aqui :/
                </Text>
                )}
                </View>

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
        justifyContent:'center'
    },
    
})


export default HomeScreen