import { View, Text } from "react-native"
import React from 'react';



export default (props) => {
    return(
        <View >
            {props.items.map(item => {
                return(
                    <View key={item.id}>
                        <Text>
                            {item.title}
                        </Text>
                        <View />
                    </View>
                )
            })}
        </View>
    )
}