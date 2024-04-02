import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getAssciadoStoredData() {
    try {
        const data = await AsyncStorage.getItem('ASSOCIADO')
        if (data) {
            return JSON.parse(data)
        }
        return null
    } catch (error) {
        console.error(error)
        return null    }
}

export async function setAssociadoStoredData(data) {
    try {
        await AsyncStorage.setItem('ASSOCIADO', JSON.stringify(data))
    } catch (error) {
        console.error(error)
    }
}

