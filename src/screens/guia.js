import { View, Text } from "react-native"
import { useEffect, useState } from "react"
import AgendamentoHeader from "../components/agendamento/AgendamentoHeader"
import ButtonContainer from "../components/utils/Button"
import { useGlobalContext } from "../services/context"
import api from "../services/api"
import { useIsFocused } from "@react-navigation/native"

function Guia(){

   const {associado, agendamento} = useGlobalContext()
   const [credenciado, setCredenciado] = useState({})
   const isFocused = useIsFocused()

   const getCredenciadoData = async () => {
    try {
        const {data} = await api.get(`/listarUnicoCredenciado/${agendamento.COD_CREDENCIADO}`)
        return data.response[0]
    } catch (error) {
        console.error(error)
    }
}

    useEffect(()=>{
        const effect = async () => {
            const data = await getCredenciadoData()
            setCredenciado(data)
        }

        if(isFocused){
            effect()
        }

        console.log(agendamento)
            

    }, [isFocused])
    return(
       

        <View>
            oi eu sou a liberaçao de guia
        </View>


        
     

    )
}

export default Guia