import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={{height: '60%', minHeight: 200}}>
          <View style={styles.inputField}>
            <Text style={styles.fieldLabel}>PICK-UP LOCATION</Text>
            <TextInput
              placeholder='New York JFK Int Airport'
              style={styles.textInput}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.inputField}>
              <Text style={styles.fieldLabel}>PICK-UP TIME</Text>
              <TextInput
                placeholder={new Date()}
                style={styles.textInput}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.fieldLabel}>DROP-OFF TIME</Text>
              <TextInput
                placeholder={new Date()}
                style={styles.textInput}
              />
            </View>
          </View>
          <View style={{width: '100%', justifyContent: 'flex-end', flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '100%', maxWidth: 380}}>
              <Button
                color="rgb(255, 125, 25)"
                title="GET A QUOTE"
                onPress={() => navigation.navigate('Lista')}
              />
            </View>
          </View>
        </View>
        
      </View>
      <View style={styles.footer}>
        <Text style={{color: '#fff'}}>
          <Text style={styles.footerItems}>Contact</Text>
          <Text style={styles.footerItems}>Imprint</Text>
          <Text style={styles.footerItems}>Privacy Policy</Text>
          <Text style={styles.footerItems}>Franchise</Text>
          <Text style={styles.footerItems}>CSR</Text>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 4,
    backgroundColor: 'black'
  },
  body: {
    flex: 20,
    backgroundColor: 'white',
    padding: 20
  },
  footer: {
    flex: 3,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  inputField: {
    flex: 1,
    flexDirection: 'column',
    padding: 4
  },
  textInput: {
    backgroundColor: '#e6e6e6',
    padding: 15
  },
  fieldLabel: {
    padding: 3
  },
  footerItems: {
    padding: 6
  }
});
