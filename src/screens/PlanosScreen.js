import { View, StyleSheet } from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import CardAgendamento from "../components/Home/CardAgendamento"
//import ButtonContainer from "../components/utils/Button"

function Planos(){

    const [plano, setPlano] = useState()
    const navigator = useNavigation()

    const escolherPlano = (plano) => {
        setPlano(plano)
        navigator.navigate('Cadastrar', {plano:plano})
    }

    return(
        <View style={styles.mainContainer}>
            <CardAgendamento
            title="Individual"
            data="R$ 35,90 Mensal"
            onPress={escolherPlano}
            />

            <CardAgendamento
            title="Familiar"
            data="R$ 59,90 Mensal"
            onPress={escolherPlano}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    mainContainer:{
       justifyContent:'center',
       height:'600px',
    }
})

export default Planos