import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

function CardAgendamento (props){
    const {title, data, onPress } = props

    return(
        <View style={styles.mainContainer}>
            <TouchableOpacity 
            style={styles.cardContainer}
            onPress={onPress}>
                <Text>{title}</Text>
                <Text>{data}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10px',
        marginBottom:'10px'
    },

    cardContainer:{
        alignItems:'center',
        width:'300px',
        flexDirection:'row',
        backgroundColor:'#d9d9d9',
        justifyContent:'space-between',
        height:'50px',
        padding:'14px'
    }
})

export default CardAgendamento