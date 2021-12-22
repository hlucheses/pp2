import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Lista() {
  const navigation = useNavigation();
  
  const [isLoading, setLoading] = useState(true);
  const [DATA, setData] = useState([]);

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
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView style={styles.body}>
        <View style={{borderBottom: '1px solid rgb(255, 125, 25)', width: '80%', alignSelf: 'center'}}>
          <Text style={{textAlign: 'center'}}>RECOMMENDATION</Text>
        </View>

        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.itens}>
                <View style={{borderBottom: '1px solid #888', padding: 2}}>
                  <View style={styles.caixa}>
                    <Image
                      source={require('../assets/img/' + item.img)}
                      style={styles.image}
                    />
                    <Text style={{marginLeft: '10%', fontSize: 20}}>{item.marca} {item.modelo}</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15}}>
                    <View>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>€ {item.preco} <Text style={{fontSize: 8}}>per day</Text></Text>
                      <Text style={{color: '#888', fontSize: 16}}>Total: € {item.preco}</Text>
                    </View>
                    <View>
                      <Button
                        color="rgb(255, 125, 25)"
                        title="PAY NOW"
                        onPress={() => navigation.navigate('Detalhes', {...item})}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
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
