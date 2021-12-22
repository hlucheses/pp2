import React from 'react'
import {View, Text} from 'react-native'

export default function Detalhes({route, navigation}) {

    const {carro} = route.params;

    return (
        <View>
            <Image
                                source={require('../assets/img/' + item.img)}
                                style={styles.imagens}
                            />
                            <Text>Pickup Location</Text>
                            <Text></Text>
                            <Text>{item.marca} {item.modelo}</Text>
                            <Text>
                            <Text>{item.preco}€ por dia</Text>
                            <Text>{"\n"}Preço total: {item.preco}€</Text>
                            </Text>
        </View>
    );
}