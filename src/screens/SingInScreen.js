import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

function SingInScreen(){
    const [hidePassword, sethidePassword] = useState(true)
    const [visibilityIcon, setVisibilityIcon] = useState('visibility-off')

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
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/logo.png')}/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                placeholder="Email:"/>
            </View>

            <View style={styles.passwordInputContainer}>
                <TextInput style={styles.passwordInput}
                placeholder="Senha:"
                secureTextEntry={hidePassword}
                type/>
                <TouchableOpacity style={styles.visibilityContainer}
                onPress={changeVisibility}>
                <MaterialIcons name={visibilityIcon} size={18} color="black" />
                </TouchableOpacity>
            </View>

            <LoginButton
            title='Entrar'
            onPress={() => navigation.navigate('SingIn')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
    },

    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:'300px',

    },

    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:'50px', 
    },
    
    
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

    passwordInput:{
        borderStyle:'solid',
        borderWidth:'0.1px',
        borderRadius:'4px',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        borderRightWidth:"0",
        borderRightColor:"#fff",
        width:'170px',
    },

    passwordInputContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',
        height:'50px', 

    },

    visibilityContainer:{
        borderStyle:'solid',
        borderRadius:'4px',
        borderWidth:'0.1px',
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
        borderLeftWidth:"0",
        width:'30px',
    },



})

export default SingInScreen