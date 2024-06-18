import { View, Text, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import AgendamentoHeader from "../components/agendamento/AgendamentoHeader"
import ButtonContainer from "../components/utils/Button"
import { useGlobalContext } from "../services/context"
import api from "../services/api"
import { useIsFocused, useNavigation } from "@react-navigation/native"

function Guia(){

   const {associado, agendamento} = useGlobalContext()
   const [credenciado, setCredenciado] = useState({})
   const isFocused = useIsFocused()
   const navigator = useNavigation()

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
            <AgendamentoHeader
            descricao={agendamento.DESCRICAO}
            nome_credenciado={credenciado.NOME_CREDENCIADO}
            logadouro={credenciado.LOGADOURO}
            numero_logadouro={credenciado.NUMERO_LOGADOURO}
            hora={agendamento.HORA}
            data={agendamento.DATA}
            />

            <View style={styles.textAlign}>
                <Text style={styles.textContainer}>
                    AGENDAMENTO: #00{agendamento.COD_AGENDAMENTO}
                </Text>
            </View>

            <View style={styles.textAlign}>
                <Text style={styles.textContainer}>
                    ASSOCIADO: {associado.NOME_ASSOCIADO}
                </Text>
            </View>

            <View style={styles.textAlign}>
                <Text style={styles.textContainer}>
                    CÓDIGO: #00{associado.COD_ASSOCIADO}
                </Text>
            </View>

            <ButtonContainer
            title='Voltar'
            onPress={() => navigator.navigate('home')}
            />
        </View>


        
     

    )
}

const styles = StyleSheet.create({
    textContainer: { fontSize:18, textAlign:'left', width:'80%', borderStyle:'solid'},
    textAlign: {justifyContent:'center', alignItems:'center'}
})

export default Guia