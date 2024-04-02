import { View, Text } from "react-native"
import { useIsFocused } from "@react-navigation/core"
import { useState, useEffect } from "react"
import { getAgendamentosStoredData, getAssociadoStoredData } from "../services/GetStoredData"



function AgendamentoScreen(){
    const[agendamento, setAgendamento] = useState({})
    const[associado, setAssociado] = useState({})
    const isFocused = useIsFocused()

    const getAgendamentoData = async () =>{
        const data = await getAgendamentosStoredData()
        console.log(data)
        return JSON.parse(data)
    }

    const getAssociadoData = async () => {
        const data = await getAssociadoStoredData()
        console.log(data)
        return JSON.parse(data)

    }

    useEffect(() =>{
    const fetchData = async () =>{
        const agendamentoData = await getAgendamentoData()
        setAgendamento(agendamentoData)
        const associadoData = await getAssociadoData()
        setAssociado(associadoData)
    }

    fetchData
    }, [isFocused])

    return(
        <View>
            <Text>
            oi eu sou a jennifer e vou confirmar seu agendamento
            </Text>
        </View>
    )
}

export default AgendamentoScreen