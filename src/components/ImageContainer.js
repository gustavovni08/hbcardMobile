import { View, Image } from 'react-native-web'

function ImageContainer(){
    return(
        <View style={styles.imageContainer}>
            <Image source={require('../assets/logo.png')}/>
        </View>
    )
}

export default ImageContainer