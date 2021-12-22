import React, { useState} from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import MaterialUnderlineTextbox from "../component/MaterialUnderlineTextbox";
import CupertinoButtonDanger from "../component/CupertinoButtonDanger";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({navigation}) {

    const [aeroporto, setAeroporto] = useState();

    return (
        <View style={styles.container}>
      <View style={styles.rect}></View>
      <View style={styles.rect1}>
        <Text style={styles.text}>
          Contact Imprint Privacy Policy Franchise CSR
        </Text>
      </View>
      <View style={styles.rect2}>
        <View style={styles.pickupLocationRow}>
          <Text style={styles.pickupLocation}>Pickup Location</Text>
          <Text style={styles.pickupTime}>Pickup Time</Text>
        </View>
        <View style={styles.materialUnderlineTextboxRow}>
          <MaterialUnderlineTextbox
            style={styles.materialUnderlineTextbox}
          ></MaterialUnderlineTextbox>
          <MaterialUnderlineTextbox
            style={styles.materialUnderlineTextbox1}
          ></MaterialUnderlineTextbox>
        </View>
        <Text style={styles.dropoffTime}>Dropoff Time</Text>
        <MaterialUnderlineTextbox
          style={styles.materialUnderlineTextbox2}
        ></MaterialUnderlineTextbox>
        <CupertinoButtonDanger
          style={styles.cupertinoButtonDanger}
          onPress = {() => {navigation.navigate('Lista');}}
        ></CupertinoButtonDanger>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    rect: {
      width: '100%',
      height: 88,
      backgroundColor: "rgba(0,0,0,1)",
      marginTop: 0
    },
    rect1: {
      width: '100%',
      height: 88,
      backgroundColor: "rgba(0,0,0,1)",
      marginTop: 548
    },
    text: {
      fontFamily: "roboto-regular",
      color: "rgba(239,231,231,1)",
      marginTop: 35,
      marginLeft: 36
    },
    rect2: {
      width: '100%',
      height: 548,
      backgroundColor: "#fff",
      marginTop: -636
    },
    pickupLocation: {
      fontFamily: "roboto-regular",
      color: "#121212"
    },
    pickupTime: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 68
    },
    pickupLocationRow: {
      height: 17,
      flexDirection: "row",
      marginTop: 65,
      marginLeft: 18,
      marginRight: 112
    },
    materialUnderlineTextbox: {
      height: 43,
      width: 155
    },
    materialUnderlineTextbox1: {
      height: 43,
      width: 155,
      marginLeft: 13
    },
    materialUnderlineTextboxRow: {
      height: 43,
      flexDirection: "row",
      marginLeft: 18,
      marginRight: 34
    },
    dropoffTime: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 72,
      marginLeft: 40
    },
    materialUnderlineTextbox2: {
      height: 43,
      width: 310,
      marginLeft: 31
    },
    cupertinoButtonDanger: {
      height: 43,
      width: 301,
      marginTop: 50,
      marginLeft: 40
    }
  });
