import { View, Text, Pressable, StyleSheet } from "react-native"

function CardAgendamento (props){
    const {title, data, onPress } = props

    return(
        <View>
            <Pressable>
                <Text>{title}</Text>
                <Text>{data}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        justifyContent:'center',
        alignItems:'center',
        margin:'10px',
    },

    cardContainer:{
        width:'80%',
        backgroundColor:'#000',
        justifyContent:'space-between',
        height:'35px'
    }
})

export default CardAgendamento