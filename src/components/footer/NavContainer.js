import { View, TouchableOpacity, StyleSheet, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

function NavContainer(props){

    const {title, width} = props
    const navigator = useNavigation()

    return(
        <View>
            <TouchableOpacity
            style={[styles.mainContainer, {width: width ? `${width}px` : '90px'}]}
            onPress={()=>navigator.navigate(title)}>
                <Text>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#d9d9d9',
        borderColor:'white',
        height:'80px',

    }
})

export default NavContainer