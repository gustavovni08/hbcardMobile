import { TouchableOpacity, View, Text } from "react-native"
import { useState } from "react"

function Picker(props){

    const {data, setOption} = props
    const [show, setShow] = useState(false)
    const [valor, setValor] = useState('SELECIONE')

    const handleClick = (item) => {
        setOption(item)
        setValor(item)
        setShow(false)
    }

    return(
        <View>
            <TouchableOpacity onPress={() => setShow(true)}>
                <Text>{valor}</Text>
                {show === true && data.map( (item) => (
                    <View>
                        <TouchableOpacity
                        onPress={() => handleClick(item)}
                        >
                            <Text>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )

                )}
            </TouchableOpacity>
        </View>
    )
}

export default Picker