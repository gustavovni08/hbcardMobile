import { View, Text, StyleSheet } from "react-native"
import SelectContainer from "../components/utils/selectContainer"
import ButtonContainer from "../components/utils/Button"
import { useState, useEffect } from "react"
import { useGlobalContext } from "../services/context"

function FormaDePagamento(){

    const {agendamento, associado} = useGlobalContext()
    
    const[forma, setForma] = useState('PIX/BOLETO (À VISTA)')
    const[taxa, setTaxa] = useState(0.99)
    const formas = ['PIX/BOLETO (À VISTA)', 'CARTÃO DE CRÉDITO']

    const changeStates = (itemValue) => {
        setForma(itemValue)
        console.log(forma)

        if( itemValue === 'PIX/BOLETO (À VISTA)'){
            setTaxa(0.99)
        }else{
            setTaxa(parseFloat(((59.90 * 2.49) / 100).toFixed(2)))
        }
    }

     useEffect(()=>{
        console.log(agendamento)
     }, [])

    return(
        <View style={styles.mainContainer}>
            <View style={styles.SelectContainer}>
                <SelectContainer
                label='Forma de Pagamento'
                data={formas}
                selectedValue={forma}
                onValueChange={(itemValue) => changeStates(itemValue)}
                flexDirection='column'
                paddingLeft='0px'/>
                <Text style={styles.TextContainer}>Taxa de forma de pagamento: +{taxa}</Text>
            </View>
            

            <ButtonContainer
            title="ir para pagamento"
            width="80%"
            height="40px"
            />


        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        
        justifyContent:'space-evenly',
        height:'100%'
    },

    SelectContainer:{
        width:'100%',
        alignItems:'center'
    },

    TextContainer:{
        width:'100%',
        textAlign:'center'
    }
})

export default FormaDePagamento