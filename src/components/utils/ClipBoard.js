import { TextInput, View, StyleSheet, Button } from "react-native"
import { Linking } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';

function ClipBoard(props){

    const {texto} = props
    
    const copiarTexto = () => {
        Clipboard.setString(texto)
        Linking.openURL(texto)
    }

    return(
        <View style={styles.mainContainer}>
            <TextInput
            value={texto}
            editable={false}
            style={styles.textInputStyle}
            />
            <Button
            title="Copiar"
            onPress={copiarTexto}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        justifyContent:'center',
        width:'100%',
        marginTop:'10px'

    },

    textInputStyle:{
        backgroundColor:'#fff',
        width:'60%'
    }
})

export default ClipBoard