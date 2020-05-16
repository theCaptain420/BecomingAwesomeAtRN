import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    newsBackground: {
        backgroundColor:"white",
        width:"95%", 
       alignSelf:"center"
    },
    newsElementTitle: {
        color:"#595959",
        fontWeight:"bold",
        fontSize:20,
        margin:10
    },
    newsElementURL: {
        alignSelf:"center",
        color:"#595959",
        fontWeight:"bold",
        fontSize:10,
        margin:10
    },
    newsText: {
        alignSelf:"center",
        color:"#595959",
        fontWeight:"bold",
        fontSize:10,
        margin:10
    },
    newsSeperatorLine: {
        backgroundColor:"darkgray",
        height:1,
        width: "80%",
        alignSelf:"flex-end",
        marginRight:"5%"
    },
    newsDescText:{
        alignSelf:"flex-end",
        marginHorizontal:20   }
});