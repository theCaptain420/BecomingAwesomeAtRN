import { View, Text, StyleSheet, Modal,ScrollView, TextInput, } from "react-native"
import React, { useState } from 'react';


export default (props) => {
    

    return (
        <View >
            <Modal animationType="slide"
                transparent={false}
                visible={props.modalVisibility}
                onRequestClose={props.toggleModal}>
                <TextInput value={props.currentComment} onChangeText={props.changeCurrentComment} onSubmitEditing={props.addComment} />
                
                <ScrollView style={{ height: "100%" }}>
                     
                {props.comments.map(item => {
                        return (
                            <Text key={item.comment}>
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