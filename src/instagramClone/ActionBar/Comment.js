import { View, Text, StyleSheet, Modal,ScrollView, TextInput, } from "react-native"
import React, { useState } from 'react';


export default (props) => {
    
    const [addedComments, addToAddedComment] = useState(props.comments)

    return (
        <View >
            <Modal animationType="slide"
                transparent={false}
                visible={props.modalVisibility}
                onRequestClose={props.toggleModal}>
                <TextInput value={props.currentComment} onChangeText={props.setComments} onSubmitEditing={()=>{addToAddedComment(addedComments.concat("tsm"))}}/>
                
                <ScrollView style={{ height: "100%" }}>
                     
                {addedComments.map(item => {
                        return (
                            <Text key={item.comment} >
                                {item.comment}
                            </Text>
                        )
                    })}
                
                
                
                
                </ScrollView>

            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({

})