import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage} from '../pages/LoginPage';
import {MainPage} from '../pages/MainPage';
import {ForgotPwdPage} from '../pages/ForgotPwdPage';
import {ForgotUsernamePage} from '../pages/ForgotUsernamePage';
import {RegisterPage} from '../pages/RegisterPage'
import {DetailsPage} from '../pages/DetailsPage'
import store from '../redux/store'
import { Provider } from 'react-redux'



const StackPublic = createNativeStackNavigator();

export const Routing = () => {

  return (

    <Provider store={store}>
      
        <NavigationContainer>
          <StackPublic.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <StackPublic.Screen name="Login Page" component={LoginPage} />
            <StackPublic.Screen name="Main Page" component={MainPage} />
            <StackPublic.Screen name="Forgot Pwd Page" component={ForgotPwdPage} />
            <StackPublic.Screen name="Forgot Username Page" component={ForgotUsernamePage} />
            <StackPublic.Screen name="Register Page" component={RegisterPage} />
            <StackPublic.Screen name="Details item" component={DetailsPage} />
          </StackPublic.Navigator>
        </NavigationContainer>
        </Provider>
    
  );
};