import { StyleSheet, View, TextInput } from "react-native"

function InputContainer(props){

    const {onChangeText, value, placeholder} = props

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer:{
        alignItems:'center',
        justifyContent:'flex-start',
        height:50, 
    },

    input:{
        borderStyle:'solid',
        borderWidth:1,
        // borderRadius:'4px',
        height:30,
        width:200,
        height:30,
        backgroundColor:'#fff'
    },
})

export default InputContainer