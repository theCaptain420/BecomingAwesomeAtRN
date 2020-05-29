import { View, Text, StyleSheet } from "react-native"
import React, {useState} from 'react';
import Comment from './Comment'

export default (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [comment, setComment] = useState(props.comments);

    return(
        <View >
            <Text style={styles.mainFooter} onPress={()=>setModalVisible()}>
                Comments
            </Text>


            <Comment modalVisibility={modalVisible} toggleModal={setModalVisible} comments={props.comments} currentComment={comment} setComments={setComment}/>
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