import { Text, View, StyleSheet } from "react-native"

function AgendamentoHeader(props){

    const {descricao, nome_credenciado, logadouro, numero_logadouro} = props

    return(
        <View style={styles.mainContainer}>
        <Text style={styles.textAlign}>{descricao}</Text>
        <Text style={styles.textAlign}>{nome_credenciado}</Text>
        <Text style={styles.addressTextAlign}>{logadouro}, {numero_logadouro}</Text>        
        </View>
    
    )
}


const styles = StyleSheet.create({

    mainContainer:{
        justifyContent:'center',
        alignItems:'center',
        height: '200px'

    },

    textAlign:{
        fontSize:20, 
        width:'80%', 
        textAlign:'left'
    },

    addressTextAlign:{
        fontSize:19,
        width:'80%',
        textAlign:'left'
    }

})


export default AgendamentoHeader