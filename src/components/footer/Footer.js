import { View, StyleSheet } from "react-native"
import NavContainer from "./NavContainer"

function Footer(props){

    const {width} = props

    return(
        <View style={[styles.mainContainer, {width: width ? width : '90%'}]}>
        <NavContainer
        title='Mensalidades'
        width={parseFloat(width/3)}/>
        <NavContainer
        title='Home'
        width={parseFloat(width/3)}/>
        <NavContainer
        title='Prontuario'
        width={parseFloat(width/3)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center',
        // width:'100%',
        height:'10%',
        backgroundColor:'#d9d9d9'

    }
})

export default Footer