import { Picker, Text, StyleSheet, View } from "react-native"


function SelectContainer(props){

    const {label, data, onValueChange} = props

    return( 
    <View style={styles.mainContainer}>
        <Text style={{fontSize:'22px'}}>{label}:</Text>
        <Picker>
            {data.map((item) =>(
                <Picker.Item
                label={item}
                value={item}
                />
            ))}
            
        </Picker>
    </View>
    
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        width: '80%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingLeft:'35px',
        marginBottom:'10px'
    }
})

export default SelectContainer