import { StyleSheet, View, TouchableOpacity, Text } from "react-native"

function ButtonContainer(props){
    const {title, onPress, width, height, fontSize} = props
    return(
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
        style={[styles.button,
        {height: height ? height : '40px'},
        {width: width ? width : '200px'}]}
        onPress={onPress}>
            <Text style={
                [styles.buttonFont,
                {fontSize: fontSize ? fontSize : '20px'}]}>
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
        height:'50px', 
    },

    button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#2191E3',
    },

    buttonFont:{
        color:'#fff',
        fontWeight:'bold',
    }
})

export default ButtonContainer