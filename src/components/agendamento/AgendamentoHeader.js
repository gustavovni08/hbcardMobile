import { Text, View, StyleSheet } from "react-native"

function AgendamentoHeader(props){

    const {descricao, nome_credenciado, logadouro, numero_logadouro, data, hora} = props

    return(
        <View style={styles.mainContainer}>
        <Text style={styles.textAlign}>{descricao}</Text>
        <Text style={styles.textAlign}>{nome_credenciado}</Text>
        <Text style={styles.addressTextAlign}>{logadouro}, {numero_logadouro}</Text>        
        {data && hora && (
            <Text style={styles.textAlign}>{data} às {hora}</Text>
        )}

        </View>
    
    )
}


const styles = StyleSheet.create({

    mainContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:180

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