import { View, Text, StyleSheet, Modal,ScrollView } from "react-native"
import React, { useState } from 'react';


export default (props) => {


    return (
        <View >
            <Modal animationType="slide"
                transparent={false}
                visible={props.modalVisibility}
                onRequestClose={props.toggleModal}>

                <ScrollView style={{ height: "100%" }}>
                    {props.comments.map(item => {
                        return (
                            <Text>
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