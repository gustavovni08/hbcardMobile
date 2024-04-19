import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

function PasswordContainer(props){

    const {onChangeText, value} = props

    const [hidePassword, sethidePassword] = useState(true)
    const [visibilityIcon, setVisibilityIcon] = useState('visibility-off')
    // const [password, setPassword] = useState('')

    const changeVisibility = () => {
        if(hidePassword === true){
            sethidePassword(false)
            setVisibilityIcon('visibility')
        } else {
            sethidePassword(true)
            setVisibilityIcon('visibility-off')
        }
    }
    return(
            <View style={styles.passwordInputContainer}>
                <TextInput style={styles.passwordInput}
                placeholder="Senha:"
                secureTextEntry={hidePassword}
                onChangeText={onChangeText}
                value={value}
                />
                <TouchableOpacity style={styles.visibilityContainer}
                onPress={changeVisibility}>
                <MaterialIcons name={visibilityIcon} size={18} color="black" />
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    passwordInput:{
        borderStyle:'solid',
        borderWidth:'0.1px',
        borderRightColor:"#fff",
        width:'170px',
        height:'30px',
        backgroundColor:'#fff'
    },

    passwordInputContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',
        height:'50px', 

    },

    visibilityContainer:{
        justifyContent:'center',
        alignItems:'center',
        borderStyle:'solid',
        borderWidth:'0.1px',
        width:'30px',
        height:'30px',
        backgroundColor:'#fff'
    },
})

export default PasswordContainer
