import { View, Text, StyleSheet } from "react-native"

function ValorContainer (props){

    const {valor} = props

    return(
        <View style={styles.mainContainer}>
            <Text style={{fontSize:22}}>Valor:</Text>
            <Text style={{fontSize:22}}>{valor}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    mainContainer:{
        width: '80%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingLeft:'35px',
        marginBottom:'10px'
    }
})

export default ValorContainer