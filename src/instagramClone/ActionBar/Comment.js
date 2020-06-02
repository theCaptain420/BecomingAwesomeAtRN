import { View, Text, StyleSheet, Modal, ScrollView, TextInput, Button, } from "react-native"
import React, { useState } from 'react';
import {storeData, getData} from './asyncSavecomments'

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

                <Button
                    onPress={()=>storeData(props.comments)}
                    title="Save comments to storage"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

                <Button
                    onPress={()=>getData()}
                    title="¨print comments saved"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({

})