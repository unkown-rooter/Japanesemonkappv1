import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoansScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loans Screen</Text>
      <Button
        title="Apply for Loan"
        onPress={() => navigation.navigate('LoanApplication')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LoansScreen;
