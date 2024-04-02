import { StyleSheet, View, TextInput } from "react-native"

function InputContainer(props){

    const {onChange, value, placeholder} = props

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            value={value}
            onChangeText={onChange}
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
        borderRadius:'4px',
        width:'200px',
        height:'30px'
    },
})

export default InputContainer