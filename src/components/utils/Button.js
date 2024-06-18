import { StyleSheet, View, TouchableOpacity, Text } from "react-native"

function ButtonContainer(props){
    const {title, onPress, width, height} = props
    return(
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
        style={[styles.button,
        {height: height ? height : 40},
        {width: width ? width : 200}]}
        onPress={onPress}>
            <Text style={styles.buttonFont}>
                {title}
            </Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:50, 
    },

    button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#2191E3',
    },

    buttonFont:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    }
})

export default ButtonContainer