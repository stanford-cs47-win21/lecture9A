import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../Navigation/AppNavigation'

export default function SignInScreen({ navigation }) {
  const { signIn } = React.useContext(AuthContext);
  _signInAsync = async () => {
    
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in!" onPress={_signInAsync} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  