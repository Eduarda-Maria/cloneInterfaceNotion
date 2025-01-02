import { Image, Text, TouchableOpacity, View } from "react-native";

import { s } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/app/styles/colors";

type Props={
    data:{
        title: String
        cover?: String
    
    }
}

export function Recent({data}: Props){
    return <TouchableOpacity style={s.container} activeOpacity={0.7}>
        <Image style={s.cover} source={{uri: data.cover}}/>


        <View style={s.content}>
            <Feather 
                name="file-text" 
                size={32} 
                color={colors.gray[300]} 
                style={s.icon}
            />
        

            <Text style={s.title} numberOfLines={2}>
                {data.title}
            </Text>
        </View>
    </TouchableOpacity>
}