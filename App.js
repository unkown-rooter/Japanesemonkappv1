import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import LoansScreen from './screens/LoansScreen';
import AboutScreen from './screens/AboutScreen';
import LoanApplicationScreen from './screens/LoanApplicationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Loans" component={LoansScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="LoanApplication" component={LoanApplicationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
