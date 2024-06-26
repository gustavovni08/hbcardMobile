import { ScrollView } from "react-native-gesture-handler"
import { useState, useEffect } from "react"
import CardAgendamento from "./CardAgendamento"
import { StyleSheet } from "react-native"


function ScrollAgendamento(props){

    const {lista, onPress} = props
    const [agendamentos, setAgendamentos] = useState([])

    useEffect(()=>{
        setAgendamentos(lista)
    }, [lista])



    return(

        <ScrollView style={styles.ScrollContainer}>
            {agendamentos.map((agendamento, index) => {
                return(
                    <CardAgendamento
                    key={index}
                    title={agendamento.DESCRICAO}
                    data={agendamento.DATA}
                    onPress={() => onPress(agendamento)}
                    />
                
                    )
            })}
        </ScrollView>

    )

    
}

const styles = StyleSheet.create({
    ScrollContainer:{
        maxHeight:350
    }
})


export default ScrollAgendamento