import React, { useState, useEffect } from 'react'
import { Image, View, Text, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import CupertinoButtonDanger from "../component/CupertinoButtonDanger2";

export default function Lista({ navigation }) {

    const cont = 0;
    const imagens = [
        {img: require('../assets/img/bmw-x3-suv-white-US-2021.png')},
        {img: require('../assets/img/nissan-versa-4d-white-2021.png')},
        {img: require('../assets/img/vw-jetta-4d-silber-2019.png')}
    ];
    const [isLoading, setLoading] = useState(true);
    const [DATA, setData] = useState([])
    const getElements = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Budy-Dev/teste/main/cars.json');
            const json = await response.json();
            setData(json.cars);

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getElements();
    }, []);

    return (
        <View style={{backgroundColor: 'white'}}>
            <View style={styles.header}>

            </View>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (

                        <TouchableOpacity
                            style={styles.itens}
                            onPress={() => {
                                navigation.navigate('Detalhes',
                                    { marcaCarro: item.marca})
                            }}>
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
                            <CupertinoButtonDanger
                                style={styles.cupertinoButtonDanger}
                                onPress = {() => {navigation.navigate('Detalhes');}}
                            ></CupertinoButtonDanger>
                            
                        </TouchableOpacity>
                        
                    )}
                />
            )}
            <View style={styles.rect1}>
        <Text style={styles.text}>
          Contact Imprint Privacy Policy Franchise CSR
        </Text>
      </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itens: {
        flex: 1,
        padding: 10
    },
    imagens: {
        width: '100%',
        height: 200
    },
    header:{
        marginTop: 0,
        width: '100%',
        height: 50,
        backgroundColor: 'black'
    },
    rect1: {
      width: '100%',
      height: 88,
      backgroundColor: "rgba(0,0,0,1)",
      marginTop: 0
    },
    text: {
      fontFamily: "roboto-regular",
      color: "rgba(239,231,231,1)",
      marginTop: 35,
      marginLeft: 36
    },
})