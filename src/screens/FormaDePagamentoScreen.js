import { View, Text, StyleSheet } from "react-native"
import SelectContainer from "../components/utils/selectContainer"
import ButtonContainer from "../components/utils/Button"
import { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { useGlobalContext } from "../services/context"
import api from "../services/api"

function FormaDePagamento(){
    
    const {agendamento, associado} = useGlobalContext()
    const navigator = useNavigation()
    
    const[forma, setForma] = useState('PIX')
    const[taxa, setTaxa] = useState(0.99)
    const formas = ['PIX', 'CARTÃO DE CRÉDITO']

    const changeStates = (itemValue) => {
        setForma(itemValue)
        console.log(forma)

        if( itemValue === 'PIX'){
            setTaxa(0.99)
        }else{
            setTaxa(parseFloat(((59.90 * 2.49) / 100).toFixed(2)))
        }
    }

    function getData() {
        const dataAtual = new Date();
    

        const ano = dataAtual.getFullYear()
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
        const dia = String(dataAtual.getDate()).padStart(2, '0')

        const dataFormatada = `${ano}-${mes}-${dia}`
    
        return dataFormatada
    }

    const inserirCobranca = async () => {
        const body = {
            cod_agendamento: agendamento.cod_agendamento,
            cod_mensalidade: null,
            tipo:'AGENDAMENTO',
            status:'AGUARDANDO_PAGAMENTO',
            descricao:agendamento.descricao,
            valor: agendamento.valor,
            codigo_asaas:associado.COD_ASAAS,
            billingType: forma,
            dueDate: getData()
        }

        console.log(body)

        try {
            const {data} = await api.post('/inserirCobranca', body)
            console.log('cobranca inserida com sucesso')
            console.log(data)
            navigator.navigate('Pagamento', {taxa:taxa})
            return data
        } catch (error) {
            console.error(error)
        }
    }

     useEffect(()=>{
        console.log(agendamento)
        console.log(associado)
     }, [])

    return(
        <View style={styles.mainContainer}>
            <View style={styles.SelectContainer}>
                <SelectContainer
                label='Forma de Pagamento'
                data={formas}
                selectedValue={forma}
                onValueChange={(itemValue) => changeStates(itemValue)}
                flexDirection='column'
                paddingLeft='0px'/>
                <Text style={styles.TextContainer}>Taxa de forma de pagamento: +{taxa}</Text>
            </View>
            

            <ButtonContainer
            title="ir para pagamento"
            width="80%"
            height="40px"
            onPress={() => (inserirCobranca())}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        
        justifyContent:'space-evenly',
        height:'100%'
    },

    SelectContainer:{
        width:'100%',
        alignItems:'center'
    },

    TextContainer:{
        width:'100%',
        textAlign:'center'
    }
})

export default FormaDePagamento