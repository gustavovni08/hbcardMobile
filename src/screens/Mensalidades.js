import { View, StyleSheet, Alert, Dimensions } from "react-native"
import { useEffect, useState } from "react"

import { useGlobalContext } from "../services/context"
import ScrollMensalidades from "../components/mensalidades/ScrollMensalidades"
import Footer from "../components/footer/Footer"
import api from "../services/api"

function Mensalidades(){

    const {associado} = useGlobalContext()
    const [width, setWidth] = useState()
    const [mensalidades, setMensalidades] = useState([])


    const listarMensalidades = async () =>{
        try {
            const {data} = await api.get(`/listarMensalidadesPorAssociado/${associado.COD_ASSOCIADO}`)
            console.log(data)
            return data.data    
        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect(() => {

        const effect = async () => {
            const data = await listarMensalidades()
            if(data.length !== 0){
                setMensalidades(data)
            }
            
        }

        const screen = Dimensions.get('screen')
        console.log(screen.width)
        setWidth(screen.width)
        effect()
    }, [])
    return(
        <>


<View style={styles.container}>
            <View style={styles.mainContainer}>
            {mensalidades.length !== 0 && (
                <ScrollMensalidades
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
        flex:0.8,
        alignItems:'center',
        justifyContent:'space-evenly',
        width:'80%'
    },

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },


    
})

export default Mensalidades