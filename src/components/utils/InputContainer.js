import { StyleSheet, View, TextInput } from "react-native"

function InputContainer(props){

    const {onChangeText, value, placeholder} = props

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            value={value}
<<<<<<<< HEAD:src/components/InputContainer.js
            onChangeText={onChange}
========
            onChangeText={onChangeText}
>>>>>>>> 204c1eba7050f96ee6dcbb2d191a54826ca1e940:src/components/utils/InputContainer.js
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
        height:'30px'
    },
})

export default InputContainer