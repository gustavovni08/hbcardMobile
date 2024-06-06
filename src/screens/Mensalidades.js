import { View, StyleSheet, Alert, Dimensions } from "react-native"
import { useEffect, useState } from "react"

import ScrollAgendamento from "../components/Home/ScrollAgendamentos"
import Footer from "../components/footer/Footer"

function Mensalidades(){

    const [width, setWidth] = useState()

    const mensalidades = [
        {DESCRICAO: 'MENSALIDADE ABRIL', DATA:'PAGO'},
        {DESCRICAO: 'MENSALIDADE MAIO', DATA:'PAGO'},
        {DESCRICAO: 'MENSALIDADE JUNHO', DATA:'WAIT'},

    ]

    useEffect(() => {
        const screen = Dimensions.get('screen')
        console.log(screen.width)
        setWidth(screen.width)
    }, [])
    return(
        <>


<View style={styles.container}>
            <View style={styles.mainContainer}>
            {mensalidades.length !== 0 && (
                <ScrollAgendamento
                lista={mensalidades}/>
            )}
            </View>

            <Footer
            width={width}/>
  
        </View>
        </>
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

export default Mensalidades