import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useState, useEffect, useReducer } from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image, ActivityIndicator, StatusBar, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import UploadScreen from '../Screens/UploadScreen';
import ViewScreen from '../Screens/ViewImages';
import AuthScreen from '../Screens/AuthScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = React.createContext();

const TabNav = createBottomTabNavigator();
function MainNavigation() {
  return (
    <TabNav.Navigator
      initialRouteName='Upload'
      tabBarOptions={{
        activeTintColor: Colors.black,
        showLabel: true,
      }}>
      <TabNav.Screen name="Upload" component={UploadScreen} />
      <TabNav.Screen name="View" component={ViewScreen} />
    </TabNav.Navigator>
  );
}

const AppNavStack = createStackNavigator();
export default function AppNav() {
  // AsyncStorage.clear()

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            fbToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            fbToken: action.token,
          };
      }
    },
    {
      isLoading: true,
      fbToken: null,
    }
  );

  // const [fbToken, setFbToken] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getToken = async () => {
      const userToken = await AsyncStorage.getItem('fbToken');
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    }
    getToken();
  }, [])

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({ type: 'SIGN_IN', token: data.token });
      },
    }),
    []
  );

  if (state.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <AppNavStack.Navigator headerMode="float">
          {state.fbToken == null ? (
            <AppNavStack.Screen name="Auth" component={AuthScreen} />
          ) : (
            <AppNavStack.Screen name="App" component={MainNavigation} />
          )}
        </AppNavStack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
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

export { AuthContext }