import { View, Text, StyleSheet,Image } from "react-native"
import React from 'react';
import { Dimensions } from 'react-native'


export default (props) => {
    return(
        <View style={{flex:1, marginVertical:30}}>
            <Image style={styles.instaImage} source={{uri:props.imageURI}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    instaImage:{
        width:"100%",
        height:Dimensions.get('window').width,
    }
})