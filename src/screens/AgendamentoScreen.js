import { View, Text, Touchable } from "react-native"
import { useIsFocused } from "@react-navigation/core"
import { useState, useEffect } from "react"

import { getServicoStoredData, getAssociadoStoredData } from "../services/GetStoredData"
import api from "../services/api"

import AgendamentoHeader from "../components/agendamento/AgendamentoHeader"
import SelectContainer from "../components/utils/selectContainer"
import ValorContainer from "../components/pagamento/ValorContainer"
import ButtonContainer from "../components/utils/Button"
import { TouchableOpacity } from "react-native-web"


function AgendamentoScreen(){

    const[servico, setServico] = useState({})
    const[associado, setAssociado] = useState({})
    const[datas, setDatas] = useState([])
    const[horarios, setHorarios] = useState([])
    const[credenciado, setCredenciado] = useState({})

    const isFocused = useIsFocused()

    const getServicoData = async () =>{
        const data = await getServicoStoredData()
        console.log(data)
        return data
    }

    const getAssociadoData = async () => {
        const data = await getAssociadoStoredData()
        console.log(data)
        return data

    }

    const getCredenciadoData = async (id) => {
        try {
            const {data} = await api.get(`/listarUnicoCredenciado/${id}`)
            console.log(data)
            return data.response[0]
        } catch (error) {
            console.error(error)
        }
    }

    const setDatasDisponiveis = (dias) => {
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
                datas.push(dataFormatada)
                diaDeInicio.setDate(diaDeInicio.getDate() + 7)
            }

            diasDisponiveis = [...diasDisponiveis, ...datas] 
        })

        console.log(diasDisponiveis)
        return diasDisponiveis


    }

    const getHorarios = (horario) => {
        const horariosArray = horario.split('-')
        const horariosDisponiveis = []
        for (const horas of horariosArray){
            horariosDisponiveis.push(horas)
        }
        return horariosDisponiveis

    }

    useEffect(() =>{
    const fetchData = async () =>{
        
         const servicoData = await getServicoData()
         const parsedServicoData = JSON.parse(servicoData)
         setServico(parsedServicoData)
         
         const associadoData = await getAssociadoData()
         const parsedAssociadoData = JSON.parse(associadoData)
         setAssociado(parsedAssociadoData)

         if( parsedServicoData && parsedServicoData.CODIGO_CREDENCIADO){
            const credenciadoData = await getCredenciadoData(parsedServicoData.CODIGO_CREDENCIADO)
            setCredenciado(credenciadoData)
         }

         if(parsedServicoData && parsedServicoData.DATA){
            const datas = setDatasDisponiveis(parsedServicoData.DATA)
            setDatas(datas)
            const horario = getHorarios(parsedServicoData.HORARIOS)
            setHorarios(horario)
         }
         
    }

    fetchData()
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
            data={datas}/>

            <SelectContainer
            label="Horarios"
            data={horarios}/>

            <ValorContainer
            valor={servico.VALOR}/>

            <ButtonContainer
            title="ir para pagamento"
            width="80%"
            height="40px"
            />
        </View>
    )
}

export default AgendamentoScreen