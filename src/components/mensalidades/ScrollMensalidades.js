import { ScrollView } from "react-native-gesture-handler"
import { useState, useEffect } from "react"
import CardMensalidade from "./CardMensalidade"
import { StyleSheet } from "react-native"

function ScrollMensalidades(props){
    const {lista} = props

    const [mensalidades, setMensalidades] = useState([])

    useEffect(()=>{
        setMensalidades(lista)
    }, [lista])

    return(

        <ScrollView style={styles.ScrollContainer}>
            {mensalidades.map((mensalidade, index) => {
                return(
                    <CardMensalidade
                    key={index}
                    descricao={mensalidade.DESCRICAO}
                    valor={mensalidade.VALOR}
                    vencimento={mensalidade.VENCIMENTO}
                    status={mensalidade.STATUS}
                    link={mensalidade.LINK}
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


export default ScrollMensalidades