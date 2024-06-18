import { View, Text, StyleSheet } from "react-native";

function SubtotalLabel(props){

    const {label, valor} = props

    return(
        <View style={styles.mainContainer}>
            <Text style={styles.fontStyle}>{label}</Text>
            <Text style={styles.fontStyle}>{valor}</Text>
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
        fontSize: 18
    }
})

export default SubtotalLabel