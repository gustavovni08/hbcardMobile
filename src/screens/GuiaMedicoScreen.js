import { View, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { setServicoStoredData } from "../services/GetStoredData"
import CardAgendamento from "../components/Home/CardAgendamento"
import api from "../services/api"

function GuiaMedico(){
    
    const [servicos, setServicos] = useState({})
    const [user, setUser] = useState({})

    const navigator = useNavigation()
    
    const getUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('ASSOCIADO')
            console.log(JSON.parse(userData))
            return JSON.parse(userData)    
        } catch (error) {
            console.error(error)
        }
        
    }

    const getServicosData = async () => {
        try {
            const {data} = await api.get('/listarServicos')
            console.log(data.response)
            return data.response
        } catch (error) {
            console.error(error)
        }
    }

    const setAgendamento = async (data) =>{
        try {
            await setServicoStoredData(data)
            console.log(data)
            navigator.navigate('Agendamento')
        } catch (error) {
            console.error(error)
            return
        }
    }

    // const adicionarAgendamento = async (cod_associado, 
    //                                     cod_credenciado, 
    //                                     cod_servico, 
    //                                     valor, 
    //                                     data, 
    //                                     horarios, 
    //                                     descricao) => {
    //     const queryData = {
    //         cod_associado: cod_associado,
    //         cod_credenciado: cod_credenciado,
    //         cod_servico: cod_servico,
    //         valor: valor,
    //         data: data,
    //         hora: horarios,
    //         descricao: descricao

    //     }
    //     console.log(user)
    //     console.log(queryData)
    //     try {
    //         await api.post('/adicionarAgendamento', queryData)
    //         console.log('agendamento adicionado com sucesso!')
    //         navigator.navigate('Home')    
    //     } catch (error) {
    //         console.error(error)
    //     }
        
    // }

    useEffect(()=>{
        const fecthData = async () => {
            const user = await getUserData()
            setUser(user)
            const servicos = await getServicosData()
            setServicos(servicos)
        }

        fecthData()
    }, [])
    
    return(
        <View style={styles.mainContainer}>
            <ScrollView style={{height:400}}>
            {user && Array.isArray(servicos) && servicos.map((servico, index) => (
                <CardAgendamento
                 key={index}
                 title={servico.DESCRICAO}
                 onPress={async () => setAgendamento(servicos[index])}
                />
             ))}
            </ScrollView>
        
    </View>
    )

    
}

    const styles = StyleSheet.create({
        mainContainer: {
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }
    })

export default GuiaMedico