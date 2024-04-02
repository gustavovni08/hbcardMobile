import { View, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import ButtonContainer from "../components/utils/Button"
// import LoginButton from "../components/LoginButton"
import ImageContainer from "../components/utils/ImageContainer"


function LoginScreen(){

    const navigation = useNavigation()

    return(
        <View style={styles.mainContainer}>

            <ImageContainer/>

            <ButtonContainer
            title='Entrar'
            onPress={() => navigation.navigate('Entrar')}
            />

            <ButtonContainer
            title='Cadastrar'
            onPress={() => navigation.navigate('Cadastrar')}
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