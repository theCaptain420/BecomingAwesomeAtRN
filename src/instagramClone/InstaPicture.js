import { View, Text, StyleSheet,Image, ActivityIndicator } from "react-native"
import React,{useState} from 'react';
import { Dimensions } from 'react-native'


export default (props) => {
    const [loading, setLoading] = useState(true);


    return(
        <View style={{flex:1, marginVertical:0}}>
         
            <Image style={styles.instaImage} source={{uri:props.imageURI}} onLoad={()=>{setLoading(false)}} />
            
        </View>
    )
}
const styles = StyleSheet.create({
    instaImage:{
        width:"100%",
        height:Dimensions.get('window').width,
    }
})