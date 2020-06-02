import AsyncStorage from '@react-native-community/async-storage';
//https://react-native-community.github.io/async-storage/docs/usage

async function storeData(value) {
    try {
        //turns json into string before saving, as it can only save as string.
        const jsonValue = JSON.stringify(value)

        await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
        console.log(e)
    }
}

async function getData() {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')

        //es6 to check if it isnt null, and then turns it into json
        value != null ? JSON.parse(value) : null; 

        console.log(value)
        
    } catch (e) {
        console.log(e)
    }
}

export { getData, storeData }