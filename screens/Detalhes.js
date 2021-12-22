import React from 'react'
import {View, Text} from 'react-native'

export default function Detalhes({route, navigation}) {

    const {idFilme} = route.params;

    return (
        <View>
            <Text>ID: {idFilme}</Text>
        </View>
    );
}