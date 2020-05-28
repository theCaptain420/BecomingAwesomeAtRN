import { View, Text, StyleSheet, Modal } from "react-native"
import React, { useState } from 'react';


export default (props) => {

    return (
        <View >
            <Modal animationType="slide"
                transparent={false}
                visible={props.modalVisibility}
                onRequestClose={props.toggleModal}>

                <Text>
                    Comments
                </Text>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({

})