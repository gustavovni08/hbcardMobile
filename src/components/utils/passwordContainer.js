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
        borderWidth:1,
        borderRightColor:"#fff",
        width:170,
        height:30,
        backgroundColor:'#fff'
    },

    passwordInputContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',
        height:50, 

    },

    visibilityContainer:{
        justifyContent:'center',
        alignItems:'center',
        borderStyle:'solid',
        borderWidth:1,
        width:30,
        height:30,
        backgroundColor:'#fff'
    },
})

export default PasswordContainer
