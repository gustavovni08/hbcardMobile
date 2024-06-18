import { Text, StyleSheet, View } from "react-native"
import Picker from "./Picker"


function SelectContainer(props){

    const {label, data, setOption, flexDirection, paddingLeft} = props

    return( 
    <View style={[styles.mainContainer, 
    {flexDirection: flexDirection ? flexDirection : 'row'},
    {paddingLeft: paddingLeft ? paddingLeft : 35}]}>

        <Text style={{fontSize : 22}}>{label}:</Text>
        <Picker
        data={data}
        setOption={setOption}/>
    </View>
    
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        width: '80%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom:10
    }
})

export default SelectContainer