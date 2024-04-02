import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getAssociadoStoredData() {
    try {
        const data = await AsyncStorage.getItem('ASSOCIADO')
        return data
    } catch (error) {
        console.error(error)
        return null    
    }
}

export async function setAssociadoStoredData(data) {
    try {
        await AsyncStorage.setItem('ASSOCIADO', JSON.stringify(data))
    } catch (error) {
        console.error(error)
        return
    }
}

export async function setAgendamentoStoredData(data) {
    try {
        await AsyncStorage.setItem('AGENDAMENTO', JSON.stringify(data))
    } catch (error) {
        console.error(error)
        return
    }
}

export async function getAgendamentosStoredData() {
    try{
        const data = await AsyncStorage.getItem('AGENDAMENTO')
        return data
    } catch (error) {
        console.error(error)
        return
    }
}
