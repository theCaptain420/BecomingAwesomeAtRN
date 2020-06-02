import { View, Text, StyleSheet } from "react-native"
import React, { useState } from 'react';
import Comment from './Comment'

export default (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [comments, setComment] = useState(props.comments);
    const [currentComment, setCurrentComment] = useState(props.comments)

    const handleAddMoreComments = () => {
        if (currentComment !== "") {
            setComment(comments.concat({ comment:currentComment }))
            setCurrentComment("")
        }
    }


    return (
        <View >
            <Text style={styles.mainFooter} onPress={() => setModalVisible()}>
                Comments
            </Text>

            
            <Comment modalVisibility={modalVisible} toggleModal={setModalVisible} comments={comments} currentComment={currentComment} changeCurrentComment={setCurrentComment} addComment={handleAddMoreComments} />
        </View>
    )
}
const styles = StyleSheet.create({
    mainFooter: {
        alignSelf: "flex-end",
        color: "#595959",
        fontWeight: "bold",
        fontSize: 10,
        margin: 10,
        color: "darkgray"
    }
})