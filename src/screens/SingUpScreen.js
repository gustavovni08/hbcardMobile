import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native"


function SingUpScreen(){
    return(
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/logo.png')}/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                placeholder="Email:"/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                placeholder="Senha:"
                secureTextEntry={true}
                type/>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonFont}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
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
        borderRadius:'4px 0px 4px 0px ',
        width:'170px',
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

export default SingUpScreen