import { View, Text } from "react-native"
import React from 'react';

export default () => {
    return(
        <View>
            <Text>
                Sadly the application failed getting the data due to: {this.props.errorMessage}
            </Text>
        </View>
    )
}