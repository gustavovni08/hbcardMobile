import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import CardAgendamento from "../components/Home/CardAgendamento"

function Planos(){
    
    const navigator = useNavigation()
    
    return(
        <View>
            <CardAgendamento
            title= "Individual"
            data= "R$ 35,90/mês"
            onPress={() => navigator.navigate("Cadastrar", {plano: "Individual"})}/>

<CardAgendamento
            title= "Familiar"
            data= "R$ 59,90/mês"
            onPress={() => navigator.navigate("Cadastrar", {plano: "Familiar"})}/>
        </View>
    )
}

export default Planos