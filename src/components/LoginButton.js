import { StyleSheet, View, TouchableOpacity, Text } from "react-native"

function LoginButton(props){
    const {title, onPress} = props
    return(
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
        style={styles.button}
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
        height:'50px', 
    },

    button:{
        alignItems:'center',
        justifyContent:'center',
        height:'35px',
        width:'200px',
        backgroundColor: '#3b5998',
        borderRadius:'8px'
    },

    buttonFont:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:"'22px"
    }
})

export default LoginButton