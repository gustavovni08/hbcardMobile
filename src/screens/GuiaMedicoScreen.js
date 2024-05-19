import { View, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"

import CardAgendamento from "../components/Home/CardAgendamento"

import api from "../services/api"
import { useGlobalContext } from "../services/context"


function GuiaMedico(){
    
    const { associado, setAssociado, servico, setServico} = useGlobalContext()
    const [servicos, setServicos] = useState([])

    const navigator = useNavigation()


    const getServicosData = async () => {
        try {
            const {data} = await api.get('/listarServicos')
            console.log(data.response)
            return data.response
        } catch (error) {
            console.error(error)
        }
    }

    const setAgendamento = (data) =>{
        try {
            setServico(data)
            console.log(data)
            navigator.navigate('Agendamento')
        } catch (error) {
            console.error(error)
            return
        }
    }

    useEffect(()=>{
        const fecthData = async () => {
            const servicos = await getServicosData()
            setServicos(servicos)
        }

        fecthData()
    }, [])
    
    return(

        <View style={styles.mainContainer}>
            <ScrollView style={{height:400}}>
            { Array.isArray(servicos) && servicos.map((servico, index) => (
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