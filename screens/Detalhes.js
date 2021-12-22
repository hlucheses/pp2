import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Detalhes({route}) {

    const navigation = useNavigation();
    const {marca, img, Similares, categoria, preco} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView style={styles.body}>
        <Image
            source={require('../assets/img/' + img)}
            style={styles.image}
        />
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{marca}</Text>
        <Text>{Similares} or similar ({categoria})</Text>
        <Text style={{textAlign: 'right'}}>Show details [-]</Text>
        <Text style={{color: '#888'}}>
            <Text style={{fontWeight: 'bold'}}>Pickup Location</Text>{'\n'}
            New York JFK Int Airport{'\n'}
            23.12.2021 at 12:00hrs{'\n'}
            {'\n'}
            <Text style={{fontWeight: 'bold'}}>Return Location</Text>{'\n'}
            New York JFK Int Airport{'\n'}
            24.12.2021 at 09:00hrs{'\n'}
            {'\n'}
            <Text style={{fontWeight: 'bold'}}>Rental Period</Text>{'\n'}
            1 day {'\n'}
        </Text>
        <View style={{border: '1px solid #888', padding: 3}}>
            <View style={{flexDirection: 'row', width: '100%'}}>
                <Text style={{fontSize: 16}}>Your total price:</Text>
                <Text style={{fontSize: 20, alignSelf: 'flex-end'}}>€ {preco}</Text>
            </View>
            <Text style={{fontWeight: 'bold', color: '#888'}}>Rental Period 1 day</Text>
            <Text style={{fontWeight: 'bold', color: '#888'}}>Actual amount payable (i)</Text>{'\n'}{'\n'}
            <Button
                color="rgb(255, 125, 25)"
                title="ACCEPT RATE AND EXTRAS"
                onPress={() => navigation.pop(2)}
              />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={{color: '#fff'}}>
          <Text style={styles.footerItems}>Contact</Text>
          <Text style={styles.footerItems}>Imprint</Text>
          <Text style={styles.footerItems}>Privacy Policy</Text>
          <Text style={styles.footerItems}>Franchise</Text>
          <Text style={styles.footerItems}>CSR</Text>
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
  container: {
    flex: 1
  },
  header: {
    flex: 2,
    backgroundColor: 'black',
    maxHeight: '30%',
  },
  body: {
    flex: 20,
    minHeight: 500,
    backgroundColor: 'white',
    padding: 20
  },
  footer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    maxHeight: '20%',
  },
  fieldLabel: {
    padding: 3
  },
  footerItems: {
    padding: 6
  },
  image: {
    width: 350,
    height: 200,
    alignSelf: 'center'
  }
});
