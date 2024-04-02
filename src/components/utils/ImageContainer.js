import { View, Image } from 'react-native'

function ImageContainer(){
    return(
        <View >
            <Image source={require('../../assets/logo.png')}/>
        </View>
    )
}

export default ImageContainer