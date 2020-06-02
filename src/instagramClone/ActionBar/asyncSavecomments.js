import AsyncStorage from '@react-native-community/async-storage';
//https://react-native-community.github.io/async-storage/docs/usage

async function storeData(value,skey) {
    try {
        //turns json into string before saving, as it can only save as string.
        const jsonValue = JSON.stringify(value)//can be removed if i dont want json and string instead.

        await AsyncStorage.setItem('@storage_Key'+skey, jsonValue)
    } catch (e) {
        console.log(e)
    }
}

async function getData(skey) {
    try {
        const value = await AsyncStorage.getItem('@storage_Key'+skey)

        //es6 to check if it isnt null, and then turns it into json
        value != null ? JSON.parse(value) : null;  //can be removed if i dont want json and string instead.

        console.log(value)
        
    } catch (e) {
        console.log(e)
    }
}

export { getData, storeData }