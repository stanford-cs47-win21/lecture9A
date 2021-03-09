import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import storage from '../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UploadScreen({ navigation }) {
  const getPermissionAsync = async (permission) => {
    const { status } = await Permissions.askAsync(permission);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll or camera permissions to make this work!');
    }
  }

  const uploadImage = async(uri) => {
    
  };

  const uploadFromCamera = async () => {
    await getPermissionAsync(Permissions.CAMERA);
    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      
    }
  }

  const uploadFromLibrary = async () => {
    await getPermissionAsync(Permissions.CAMERA_ROLL);
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      
    }
  }

  // Render any loading content that you like here
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Button title="Upload from camera" onPress={uploadFromCamera} />
      <Button title="Upload from library" onPress={uploadFromLibrary} />
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