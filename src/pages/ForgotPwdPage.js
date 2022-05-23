import React, {useState} from 'react';
import {commStyle} from '../styles/CommonStyle'
import {useNavigation} from '@react-navigation/native';

import axios from 'axios';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

export const ForgotPwdPage = () => {

const navigation = useNavigation();

const [isLoading, setIsLoading] = useState(false);

const [textEmail, setValueEmail] = useState('')

const funcEmail = (text) => {

    setValueEmail(text);
}

const backToLogin = () => {

    navigation.navigate('Login Page', {})
}

const runForgotPasswordAPI = () =>{

    setIsLoading(true);
     var formBody = [];
    // for (var property in jsonString) {
    // var encodedKey = encodeURIComponent(property);
    // var encodedValue = encodeURIComponent(jsonString[property]);
    formBody.push('email=' + textEmail);
    // }
    formBody = formBody.join('&');

    axios.post('https://dev-msid.posdigicert.com.my/APIEX/recovery_password',  formBody, {
        headers: {
            token: 'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
    })
    .then(res => {

        

        setIsLoading(false);

        Alert.alert('Success', 'Process successfully done.', [
            {
                text: 'OK',
            }  
          ]);
        setValueEmail('');
        console.log(res.data);
    })
    .catch(err => {
        setIsLoading(false);

        Alert.alert('Error', 'User not exist.', [
            {
                text: 'OK',
            }  
          ]);

        console.log('err : ', err)})
}

return (
    isLoading ?
    <View style={commStyle.loadingIcon}>
    <ActivityIndicator size="large">
    </ActivityIndicator>
    <Text>Please wait ...</Text>
    </View>
    :
<>
<View style={commStyle.headerBackground}>

<Image style={commStyle.mainImage} source={require('./Images/Logo.png')} />

</View>

<View style={commStyle.bodyBackground}>
<Text style={commStyle.mainTitle}>Password Recovery</Text>

<TextInput
onChangeText={funcEmail}
style={commStyle.textInputType1}
value={textEmail}
placeholder='Please enter your email.'
/>

<View style={commStyle.container}>
<View>
<TouchableOpacity
style={commStyle.btnBackStyle}
onPress={backToLogin}
>
<Text style={commStyle.btnTextStyle}>Back</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity
style={commStyle.btnProcStyle}
onPress={runForgotPasswordAPI}
>
<Text style={commStyle.btnTextStyle}>Proceed</Text>
</TouchableOpacity>
</View>
</View>

</View>

<View style={commStyle.footBackground}>

<Text style={commStyle.footText}>PPTIM  2022 {"\n"}Version 1.0</Text>

</View>
</>

);
};