import { View, Image, StyleSheet} from 'react-native'

function ImageContainer(){
    return(
        <View style={styles.imageContainer}>
            <Image source={require('../assets/logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:'300px',

    },
})

export default ImageContainer
