import { colors } from "@/app/styles/colors";
import { StyleSheet } from "react-native";


export const  S = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection: "row",
        gap:10,
        alignItems: "center",
        padding:20,
        borderBottomWidth:0.5,
        borderBottomColor: colors.gray[400],
    },

    image:{
        width:45,
        height:45,
    },
    user:{
        flex:1
    },
    name:{
        color:colors.gray[100],
        fontWeight:'500',
        fontSize:14,
    },
    email:{
        color:colors.gray[300],
        fontSize:14,
    },

})