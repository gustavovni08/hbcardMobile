import { View, Text, StyleSheet } from "react-native"
import SubtotalLabel from "./SubtotalLabel"

function Subtotal(props){

    const {valor, taxa} = props

    return(
        <View style={styles.mainContainer}>

            <SubtotalLabel
            label="Subtotal"
            valor={parseFloat(valor) + parseFloat(taxa)}
            fontSize='22px'/>
            <SubtotalLabel
            label="Valor"
            valor={valor}/>
            <SubtotalLabel
            label="Taxa"
            valor={taxa}/>
        </View>
    )

}

const styles = StyleSheet.create({
    mainContainer:{
        alignItems:'center'
    },

})

export default Subtotal