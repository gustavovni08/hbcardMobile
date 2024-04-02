import { StyleSheet, View, TextInput } from "react-native"

function InputContainer(props){

    const {onChangeText, value, placeholder} = props

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}/>
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer:{
        alignItems:'center',
        justifyContent:'flex-start',
        height:'50px', 
    },

    input:{
        borderStyle:'solid',
        borderWidth:'0.1px',
        // borderRadius:'4px',
        height:'30px',
        width:'200px',
    },
})

export default InputContainer