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

export async function setServicoStoredData(data) {
    try {
        await AsyncStorage.setItem('SERVICO', JSON.stringify(data))
    } catch (error) {
        console.error(error)
        return
    }
}

export async function getServicoStoredData() {
    try{
        const data = await AsyncStorage.getItem('SERVICO')
        return data
    } catch (error) {
        console.error(error)
        return
    }
}
