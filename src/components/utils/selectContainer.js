import { Picker, Text, StyleSheet, View } from "react-native"


function SelectContainer(props){

    const {label, data, onValueChange, selectedValue, fontSize, flexDirection, paddingLeft} = props

    return( 
    <View style={[styles.mainContainer, 
    {flexDirection: flexDirection ? flexDirection : 'row'},
    {paddingLeft: paddingLeft ? paddingLeft : '35px'}]}>
        <Text style={{fontSize: fontSize ? fontSize : '22px'}}>{label}:</Text>
        <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        >
            {data.map((item, index) =>(
                <Picker.Item
                key={index}
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
        marginBottom:'10px'
    }
})

export default SelectContainer