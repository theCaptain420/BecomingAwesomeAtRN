import AsyncStorage from '@react-native-community/async-storage';
//https://react-native-community.github.io/async-storage/docs/usage

async function storeData(value) {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
        console.log(e)
    }
}

async function getData () {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      console.log(value)
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      console.log(e)
    }
}

export {getData,storeData}