import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import LoginButton from "../components/LoginButton"
import ImageContainer from "../components/ImageContainer"


function LoginScreen(){

    const navigation = useNavigation()

    return(
        <View style={styles.mainContainer}>

            <ImageContainer/>

            <LoginButton
            title='Entrar'
            onPress={() => navigation.navigate('SingIn')}
            />

            <LoginButton
            title='Cadastrar'
            onPress={() => navigation.navigate('SingUp')}
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

})

export default LoginScreen