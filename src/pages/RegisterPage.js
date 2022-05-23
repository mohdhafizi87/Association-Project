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
  ScrollView,
  ActivityIndicator,
} from 'react-native';

export const RegisterPage = () => {

const navigation = useNavigation();

const [isLoading, setIsLoading] = useState(false);

const [textFullname, setValueFullname] = useState('');

const [textEmail, setValueEmail] = useState('');

const [textUsername, setValueUsername] = useState('');

const [textPassword, setValuePassword] = useState('');

const [textRePassword, setValueRePassword] = useState('');

const funcFullname = (text) => {

    setValueFullname(text);
}

const funcEmail = (text) => {

    setValueEmail(text);
}

const funcUsername = (text) => {

    setValueUsername(text);
}

const funcPwd = (text) => {

    setValuePassword(text);
}

const funcRePwd = (text) => {

    setValueRePassword(text);
}

const backToLogin = () => {

    navigation.navigate('Login Page', {})
}

const runRegisterAPI = () =>{

    setIsLoading(true);
     var formBody = [];
  
    formBody.push('fullname=' + textFullname);

    formBody.push('email_address=' + textEmail);

    formBody.push('username=' + textUsername);
  
    formBody.push('password=' + textPassword);
    
    formBody.push('retypepassword=' + textRePassword);
    formBody = formBody.join('&');

    axios.post('https://dev-msid.posdigicert.com.my/APIEX/test_register_user',  formBody, {
        headers: {
            token: 'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
    })
    .then(res => {

        

        setIsLoading(false);

        

        setValueEmail('');

        var resultJson = res.data;

        console.log('Value : ', resultJson.Code);

        if(resultJson.Code == '200'){

        Alert.alert('Success', 'Process successfully done.', [
            {
                text: 'OK',
            }  
          ]);
        }else{

            Alert.alert('Error', resultJson.Description, [
                {
                    text: 'OK',
                }  
              ]);
        }
    })
    .catch(err => {
        setIsLoading(false);

        Alert.alert('Error', 'Something went wrong. Please try again.', [
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

<ScrollView style={commStyle.bodyBackground}>
<Text style={commStyle.mainTitle}>Registration Form</Text>

<TextInput
onChangeText={funcFullname}
style={commStyle.textInputRegister}
value={textFullname}
placeholder='Please enter your fullname.'
/>

<TextInput
onChangeText={funcEmail}
style={commStyle.textInputRegister}
value={textEmail}
placeholder='Please enter your email.'
/>

<TextInput
onChangeText={funcUsername}
style={commStyle.textInputRegister}
value={textUsername}
placeholder='Please enter your username.'
/>

<TextInput
onChangeText={funcPwd}
style={commStyle.textInputRegister}
value={textPassword}
placeholder='Password.'
/>

<TextInput
onChangeText={funcRePwd}
style={commStyle.textInputRegister}
value={textRePassword}
placeholder='Re-password.'
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
onPress={runRegisterAPI}
>
<Text style={commStyle.btnTextStyle}>Register</Text>
</TouchableOpacity>
</View>
</View>

</ScrollView>

<View style={commStyle.footBackground}>

<Text style={commStyle.footText}>PPTIM  2022 {"\n"}Version 1.0</Text>

</View>
</>

);
};