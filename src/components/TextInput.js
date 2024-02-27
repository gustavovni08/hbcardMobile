import { StyleSheet, View, TextInput } from "react-native"

function TextInput(props){

    const {onChange, value, placeholder} = props

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            value={value}
            onChange={onChange}
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
    },
})

export default TextInput