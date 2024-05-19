import AgendamentoHeader from "../components/agendamento/AgendamentoHeader"
import Subtotal from "../components/pagamento/Subtotal"
import ClipBoard from "../components/utils/ClipBoard"

import { useGlobalContext } from "../services/context"
import { useEffect, useState } from "react"
import { useRoute } from "@react-navigation/native"
import api from "../services/api"

function Pagamento(){

    const route = useRoute()
    const{taxa} =route.params

    const {agendamento, servico } = useGlobalContext()
    const [cobranca, setCobranca] = useState("https://www.asaas.com/i/u6lkzjpth8zqth5g")
    const[credenciado, setCredenciado] = useState({})

    const getPagamento = async () => {
        try {
            const {data} = await api.get(`/listarCobrancaDeAgendamento/${agendamento.cod_agendamento}`)
            return data
        } catch (error) {
            console.error(error)
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
        const fetchData = async ()=>{
            const cobranca = await getPagamento()
            console.log(cobranca)
            setCobranca(cobranca.response[0])

            if(servico){
                const data = await getCredenciadoData()
                setCredenciado(data)
            }
            
        }

        fetchData()
        console.log(agendamento)
        console.log(servico)
    }, [])

    return(
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
        </>
    )
}

export default Pagamento