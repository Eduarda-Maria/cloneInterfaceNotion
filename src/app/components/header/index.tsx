import { View, Image, Text, TouchableOpacity } from "react-native";
import { S } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/app/styles/colors";

export function Header(){
    return <View style={S.container}>
        <Image 
            style={S.image}
            source={{uri:'https://github.com/Eduarda-Maria.png'}}
        />

        <View style={S.user}>
            <Text style={S.name}>Eduarda Maria</Text>
            <Text style={S.email}>EduardaMaria@gmail.com</Text>
        </View>

        <TouchableOpacity>
            <Feather name="more-horizontal" size={20} color={colors.gray[100]}/>
        </TouchableOpacity>
    </View>
}