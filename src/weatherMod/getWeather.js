export default async function getAppWeather(){

    try{
        let responseTemp = await fetch("https://www.metaweather.com/api/location/554890/").then(resp => resp.json()).then(respJson =>  respJson.consolidated_weather[0].the_temp)
        return responseTemp
    }catch(err){
        console.log(err)
        return "the temperature couldn't be loaded..."
    }

}