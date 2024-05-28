import AgendamentoHeader from "../components/agendamento/AgendamentoHeader"
import Subtotal from "../components/pagamento/Subtotal"
import ClipBoard from "../components/utils/ClipBoard"
import ButtonContainer from "../components/utils/Button"

import { useGlobalContext } from "../services/context"
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useRoute } from "@react-navigation/native"
import api from "../services/api"

function Pagamento(){

    const navigator = useNavigation()
    const route = useRoute()
    const taxa = route.params.taxa
    const origin = route.params.origin


    const {agendamento, servico, associado } = useGlobalContext()
    const [cobranca, setCobranca] = useState('')
    const[credenciado, setCredenciado] = useState({})

    const getPagamento = async () => {
        if(origin === 'Agendamento'){
            try {
                const {data} = await api.get(`/listarCobrancaDeAgendamento/${agendamento.cod_agendamento}`)
                return data
            } catch (error) {
                console.error(error)
            }
        }

        if(origin === 'Cadastro'){
            try {
                const {data} = await api.get(`/listarCobrancaDeAdesao/${associado.COD_ASSOCIADO}`)
                return data
            } catch (error) {
                console.error(error)
            }
        }
        
        
    }

    const getCredenciadoData = async () => {
        try {
            const {data} = await api.get(`/listarUnicoCredenciado/${servico.CODIGO_CREDENCIADO}`)
            return data.response[0]
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const cobranca = await getPagamento()
            console.log(cobranca)
            setCobranca(cobranca.response[0])

            if(servico && origin === 'Agendamento'){
                const data = await getCredenciadoData()
                setCredenciado(data)
            }
            
        }

        fetchData()
        console.log(agendamento, servico, associado )
    }, [])

    return(
        <>
        {servico && credenciado && agendamento && (
            <>
            <AgendamentoHeader
            descricao={servico.DESCRICAO}
            nome_credenciado={credenciado.NOME_CREDENCIADO}
            logadouro={credenciado.LOGADOURO}
            numero_logadouro={credenciado.NUMERO_LOGADOURO}
            data={agendamento.data}
            hora={agendamento.hora}/>
    
            <Subtotal
            valor={parseFloat(agendamento.valor).toFixed(2)}
            taxa={parseFloat(taxa)}
            />
    
            <ClipBoard
            texto={cobranca.LINK}/>

            <ButtonContainer
            title='Voltar para o Início'
            onPress={() => navigator.navigate('Home')}
            />
            </>
        )}

        {origin === 'Cadastro' && (
            <>
            <AgendamentoHeader
            descricao={servico.descricao}
            />

            <Subtotal
            valor={parseFloat(servico.valor).toFixed(2)}
            taxa={parseFloat(taxa)}
            />

            <ClipBoard
            texto={cobranca.LINK}/>

            <ButtonContainer
            title='Voltar para o Início'
            onPress={() => navigator.navigate('Home')}
            />
            </>
        )}
        
        </>
    )
}

export default Pagamento