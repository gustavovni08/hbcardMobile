import { View, Text, StyleSheet } from "react-native"
import SelectContainer from "../components/utils/selectContainer"
import ButtonContainer from "../components/utils/Button"
import { useState, useEffect } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useGlobalContext } from "../services/context"
import api from "../services/api"

function FormaDePagamento(){
    
    const {agendamento, associado, setAssociado, setServico} = useGlobalContext()
    const navigator = useNavigation()
    const route = useRoute()

    const origin = route.params.origin
    const plano =  route.params.plano ? route.params.plano : 'sem plano'
    
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

        if(plano == "Individual"){
            const body = {
                cod_agendamento: null,
                cod_mensalidade: null,
                cod_associado: associado.COD_ASSOCIADO,
                tipo:'ADESAO',
                status:'AGUARDANDO_PAGAMENTO',
                descricao:'ADESAO HBCARD INDIVIDUAL (1º MENSALIDADE + TAXA DE ADESÃO)',
                valor: parseFloat(71.9)+ parseFloat(taxa),
                codigo_asaas:associado.COD_ASAAS,
                billingType: forma,
                dueDate: getData()
            }

            console.log(body)

            try {
                const {data} = await api.post('/inserirCobranca', body)
                console.log('cobranca inserida com sucesso')
                console.log(data)
                setServico(body)
                navigator.navigate('Pagamento', {taxa:taxa, origin:origin})
                return data
            } catch (error) {
                console.error(error)
            }
        }

        if(plano == "Familiar"){
            const body = {
                cod_agendamento: null,
                cod_mensalidade: null,
                cod_associado: associado.COD_ASSOCIADO,
                tipo:'ADESAO',
                status:'AGUARDANDO_PAGAMENTO',
                descricao:'ADESAO HBCARD FAMILIAR (1º MENSALIDADE + TAXA DE ADESÃO)',
                valor: parseFloat(119.8)+ parseFloat(taxa),
                codigo_asaas:associado.COD_ASAAS,
                billingType: forma,
                dueDate: getData()
            }

            console.log(body)

            try {
                const {data} = await api.post('/inserirCobranca', body)
                console.log('cobranca inserida com sucesso')
                console.log(data)
                setServico(body)
                navigator.navigate('Pagamento', {taxa:taxa, origin:origin})
                return data
            } catch (error) {
                console.error(error)
            }
        }

        if(origin == 'Agendamento'){
        const body = {
            cod_agendamento: agendamento.cod_agendamento,
            cod_mensalidade: null,
            cod_associado: associado.COD_ASSOCIADO,
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
            navigator.navigate('Pagamento', {taxa:taxa, origin:origin})
            return data
        } catch (error) {
            console.error(error)
        }
    }
    }

    const validarUsuario = async () => {
        if(origin === "Cadastro"){
            const auth = {
                email:associado.email,
                senha:associado.senha
            }
            try {
                console.log(auth)
                const { data } = await api.post('/validarAssociado', auth)
                if (data.response.code === 200 ){
                    setAssociado(data.response.data[0])
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            console.log('Validação desnescessária')
        }
    }

     useEffect(()=>{
        const fetchData = async () =>{
            await validarUsuario()
        }

        fetchData()
        console.log(agendamento, associado, plano, origin)
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