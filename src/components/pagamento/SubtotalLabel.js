import { View, Text, StyleSheet } from "react-native";

function SubtotalLabel(props){

    const {label, valor, fontSize} = props

    return(
        <View style={styles.mainContainer}>
            <Text style={[styles.fontStyle, {fontSize: fontSize ? fontSize : '18px'}]}>{label}</Text>
            <Text style={[styles.fontStyle, {fontSize: fontSize ? fontSize : '18px'}]}>{valor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%'
    },

    fontStyle:{
        fontWeight:'400'
    }
})

export default SubtotalLabel