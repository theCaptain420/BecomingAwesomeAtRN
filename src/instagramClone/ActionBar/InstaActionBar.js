import { View, Text, StyleSheet } from "react-native"
import React, {useState} from 'react';
import Comment from './Comment'

export default () => {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View >
            <Text style={styles.mainFooter} onPress={()=>setModalVisible()}>
                Comments
            </Text>


            <Comment modalVisibility={modalVisible} toggleModal={setModalVisible}/>
        </View>
    )
}
const styles = StyleSheet.create({
    mainFooter: {
        alignSelf:"flex-end",
        color:"#595959",
        fontWeight:"bold",
        fontSize:10,
        margin:10,
        color:"darkgray"
    }
})