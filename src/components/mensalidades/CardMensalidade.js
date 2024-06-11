import { View, Linking, StyleSheet, Text } from "react-native"
import ButtonContainer from "../utils/Button"

function CardMensalidade(props){

    const {
        vencimento, 
        descricao, 
        status, 
        valor, 
        link
    } = props

    const formatarData = (str) => {
        const data = str.split('T')[0]
        const [ano, mes, dia] = data.split('-')
        return `${dia}/${mes}/${ano}`
    }


    return(
        <View style={styles.mainContainer}>
            <View><Text>{descricao}</Text></View>
            <View style={styles.lineContainer}>
                <Text>Valor:</Text>
                <Text>{valor}</Text>
            </View>
            <View style={styles.lineContainer}>
                <Text>Vencimento:</Text>
                <Text>{formatarData(vencimento)}</Text>
            </View>
            <View style={styles.lineContainer}>
                <Text>Status:</Text> 
                <Text style={{fontSize: '10px', paddingTop:'2.5%'}}>{status}</Text> 
            </View>
            
            <View>
                <ButtonContainer
                title='Pagar'
                onPress={()=> Linking.openURL(link)}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    mainContainer:{
        width: '100%',
        alignContent:'center',
        backgroundColor:'#d9d9d9',
        marginBottom:'30px',
        padding:'14px'
    },

    lineContainer:{
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row'

    }
})

export default CardMensalidade