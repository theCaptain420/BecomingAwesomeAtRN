import { View, Text } from "react-native"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'



export default () => {
    const dispatch = useDispatch()
    const articleList = useSelector(state => state.data)

    return(
        <View>
            <Text>
                Success page  
                TSM {articleList[0].by}
            </Text>
        </View>
    )
}