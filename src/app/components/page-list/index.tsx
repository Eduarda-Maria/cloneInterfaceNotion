import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { s } from "./styles";
import { colors } from "@/app/styles/colors";


import { Page } from "../page";

type Props={
    data:{
        id: String
        title: String
    }
}

export function PageList({ data }: Props  ){
    return <View style={s.container}>
        <View style={s.header}>
            <Text style={s.title}>Privado</Text>

            <TouchableOpacity>
                <Feather name="more-horizontal" size={20} color={colors.gray[300]}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Feather name="plus" size={20} color={colors.gray[300]}/>
            </TouchableOpacity>
        </View>
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Page title={item.title}/>}
            showsVerticalScrollIndicator={false}
            style={s.list}
            ItemSeparatorComponent={() => <View style={s.separator} />} 
            scrollEnabled={false}
        />
    </View>
}