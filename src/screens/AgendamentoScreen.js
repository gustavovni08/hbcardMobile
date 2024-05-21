import { View } from "react-native"
import { useNavigation ,useIsFocused } from "@react-navigation/core"
import { useState, useEffect } from "react"
// import { useNavigation } from "@react-navigation/native";

import api from "../services/api"
import { useGlobalContext } from "../services/context"

import AgendamentoHeader from "../components/agendamento/AgendamentoHeader"
import SelectContainer from "../components/utils/selectContainer"
import ValorContainer from "../components/pagamento/ValorContainer"
import ButtonContainer from "../components/utils/Button"



function AgendamentoScreen(){

    const { servico, associado, agendamento, setAgendamento} = useGlobalContext()

    const[datas, setDatas] = useState([])
    const[dataSelecionada, setDataSelecionada] = useState()
    const[horarios, setHorarios] = useState([])
    const[horaSelecionada, setHoraSelecionada] = useState()
    const[credenciado, setCredenciado] = useState({})

    const isFocused = useIsFocused()
    const navigator = useNavigation()

    const getCredenciadoData = async () => {
        try {
            const {data} = await api.get(`/listarUnicoCredenciado/${servico.CODIGO_CREDENCIADO}`)
            return data.response[0]
        } catch (error) {
            console.error(error)
        }
    }

    const setDatasDisponiveis = (dias, datasIndisponiveis) => {
        const diasDaSemana = {
            domingo: 0,
            segunda: 1,
            terca: 2,
            quarta: 3,
            quinta: 4,
            sexta: 5,
            sabado: 6,
        }

        const diasArray = dias.split('-').map(dia => diasDaSemana[dia.toLowerCase()])
        const hoje = new Date().getDay()
        const dataLimite = new Date()
        dataLimite.setMonth(dataLimite.getMonth() + 2)

        let diasDisponiveis = []
        diasArray.forEach(dia => {
            let diferencaDeDias = dia - hoje
            
            if (diferencaDeDias < 0) {
                diferencaDeDias += 7
            }

            const diaDeInicio = new Date()
            diaDeInicio.setDate(diaDeInicio.getDate() + diferencaDeDias)

            const datas = []

            while (diaDeInicio <= dataLimite) {
                const dataFormatada = `${diaDeInicio.getDate().toString().padStart(2, '0')}/${(diaDeInicio.getMonth() + 1).toString().padStart(2, '0')}/${diaDeInicio.getFullYear()}`
                
                if (!datasIndisponiveis.includes(dataFormatada)) {
                    datas.push(dataFormatada)
                }

                diaDeInicio.setDate(diaDeInicio.getDate() + 7)
            }

            diasDisponiveis = [...diasDisponiveis, ...datas] 
        })

        console.log(diasDisponiveis)
        return diasDisponiveis


    }

    const getDatasIndisponiveis = async (id) =>{
        
        try {
            const {data} = await api.get(`/listarAgendamentosConfirmados/${id}`)
            console.log(data)
            return data.response    
        } catch (error) {
            console.error(error)
            throw error
        }
        

    }

    const getHorarios = (horario) => {
        const horariosArray = horario.split('-')
        const horariosDisponiveis = []
        for (const horas of horariosArray){
            horariosDisponiveis.push(horas)
        }
        return horariosDisponiveis

    }

    const inserirNovoAgendamento = async () => {

        const {data} = await api.get('/listarMaiorCodigoAgendamento')
        let cod_agendamento = data.response[0]['MAIOR_COD_AGENDAMENTO']

        const novoAgendamento = {
            cod_agendamento: cod_agendamento++,
            cod_associado: associado.COD_ASSOCIADO,
            cod_credenciado: credenciado.COD_CREDENCIADO,
            cod_servico: servico.CODIGO,
            valor: servico.VALOR,
            data: dataSelecionada,
            hora: horaSelecionada,
            descricao: servico.DESCRICAO,
            status: 'AGUARDANDO_PAGAMENTO'
        }

        try {
            const result = await api.post('/adicionarAgendamento', novoAgendamento)
            console.log('agendamento inserido com sucesso')
            setAgendamento(novoAgendamento)
            console.log(result)
            navigator.navigate('FormaDePagamento')
        } catch (error) {
            console.error(error)
            window.alert(error)
        }

    }

    useEffect(() =>{
    const fetchData = async () =>{
 
        if(servico){
            const data = await getCredenciadoData()
            setCredenciado(data)
        }


        if(servico && servico.DATA){
            const datasIndisponiveis = await getDatasIndisponiveis(servico.CODIGO)
            const datas = setDatasDisponiveis(servico.DATA, datasIndisponiveis)
            setDatas(datas)
            const horario = getHorarios(servico.HORARIOS)
            setHorarios(horario)
        }
         
    }

    fetchData()
    console.log(servico, associado, credenciado)
    }, [isFocused])

    return(
        <View>
            <AgendamentoHeader
            descricao={servico.DESCRICAO}
            nome_credenciado={credenciado.NOME_CREDENCIADO}
            logadouro={credenciado.LOGADOURO}
            numero_logadouro={credenciado.NUMERO_LOGADOURO}
            />

            <SelectContainer
            label="Dia"
            selectedValue={dataSelecionada}
            onValueChange={(itemValue) => setDataSelecionada(itemValue)}
            data={datas}/>

            <SelectContainer
            label="Horarios"
            selectedValue={horaSelecionada}
            onValueChange={(itemValue) => setHoraSelecionada(itemValue)}
            data={horarios}/>

            <ValorContainer
            valor={servico.VALOR}/>

            <ButtonContainer
            title="ir para pagamento"
            onPress={async () => inserirNovoAgendamento()}
            width="80%"
            height="40px"
            />
        </View>
    )
}

export default AgendamentoScreen