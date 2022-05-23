import React, {useState} from 'react';
import {commStyle} from '../styles/CommonStyle'
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const LoginPage = () => {

const navigation = useNavigation();

const [textUsername, setValueUsername] = useState('')
const [textPwd, setValuePwd] = useState('')

const funcUsername = (text) => {

    setValueUsername(text);
}

const funcPwd = (text) => {

    setValuePwd(text);
}

const forgotPwdFunc = () =>{

    navigation.navigate('Forgot Pwd Page', {})
}

const forgotUsrnameFunc = () =>{

    navigation.navigate('Forgot Username Page', {})
}

const registerFunc = () =>{

    navigation.navigate('Register Page', {})
}


return (
<>
<View style={commStyle.headerBackground}>

<Image style={commStyle.mainImage} source={require('./Images/Logo.png')} />

</View>

<View style={commStyle.bodyBackground}>
<Text style={commStyle.mainTitle}>Persatuan Penduduk {"\n"}Taman Idaman Murni</Text>

<TextInput
onChangeText={funcUsername}
style={commStyle.textInputType1}
value={textUsername}
placeholder='Username'
/>

<TextInput
onChangeText={funcPwd}
style={commStyle.textInputType2}
value={textPwd}
placeholder='Password'
/>

<TouchableOpacity
style={commStyle.btnStyle}
onPress={() => navigation.navigate('Main Page', {usrnm:textUsername, pwd:textPwd})}
>
<Text style={commStyle.btnTextStyle}>Sign In</Text>
</TouchableOpacity>

<Text style={commStyle.subTitles}><Text onPress={forgotPwdFunc}> Forgot Password </Text> | <Text onPress={forgotUsrnameFunc}>Forgot Username </Text> | <Text onPress={registerFunc}>Register</Text></Text>
</View>

<View style={commStyle.footBackground}>

<Text style={commStyle.footText}>PPTIM  2022 {"\n"}Version 1.0</Text>

</View>
</>

);
};