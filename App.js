import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Lista from './screens/Lista';
import Detalhes from './screens/Detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style="">
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name='Home' component={Home}/>
     <Stack.Screen name='Lista' component={Lista}/>
       <Stack.Screen name='Detalhes' component={Detalhes}/>
     </Stack.Navigator>
   </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
