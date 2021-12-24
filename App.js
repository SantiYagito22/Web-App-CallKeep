import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import RNCallKeep from 'react-native-callkeep';
import uuid from 'uuid';
import BackgroundTimer from 'react-native-background-timer';

//Hacer que la app emita eventos periodicamente, incluso en segundo plano (para recibir llamadas sin estar conectada a la app); 
//BackgroundTimer.start();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
  callButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    width:'100%',
  },
  logContainer: {
    flex: 3,
    width: '100%',
    backgroundColor: '#D9D9D9',
  },
  log: {
    fontSize: 10,
  }
});


RNCallKeep.setup(
  {
   ios: {
     appName: 'My app name',
   },
   android: {
     alertTitle: 'Permissions required',
     alertDescription: 'This application needs to access your phone accounts',
     cancelButton: 'Cancel',
     okButton: 'ok',
     imageName: 'phone_account_icon',
     additionalPermissions: [PermissionsAndroid.PERMISSIONS.example],
     foregroundService: {
       channelId: 'com.company.my',
       channelName: 'Foreground service for my app',
       notificationTitle: 'My app is running on background',
       notificationIcon: 'Path to the resource icon of the notification',
     }, 
   }
 });



const options = {
  ios: {
    appName: 'My app name',
  },
  android: {
    alertTitle: 'Permissions required',
    alertDescription: 'This application needs to access your phone accounts',
    cancelButton: 'Cancel',
    okButton: 'ok',
    imageName: 'phone_account_icon',
    additionalPermissions: [],
    foregroundService: {
      channelId: 'com.company.my',
      channelName: 'Foreground service for my app',
      notificationTitle: 'My app is running on background',
      notificationIcon: 'Path to the resource icon of the notification',
    }, 
  }
};

console.log(RNCallKeep.setup(options));

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

