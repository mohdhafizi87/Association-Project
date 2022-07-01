import React, { Component } from "react";
import {useNavigation, useRoute} from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import Slideshow from 'react-native-image-slider-show';
import {commStyle} from '../styles/CommonStyle';


export const DetailsPage = () => {
   
 
  const navigation = useNavigation();
  const route = useRoute();
  
  const {item} = route.params;

  const backToLogin = () => {

    navigation.navigate('Main Page', {})
}

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    rect2: {
      width: 300,
      height: 392,
      backgroundColor: "#E6E6E6",
      marginTop: 180,
      marginLeft: 37
    },
    rect3: {
      width: 300,
      height: 85,
      backgroundColor: "#E6E6E6",
      marginTop: -495,
      marginLeft: 37
    }
  });

  console.log('Value : ', item);

    return (

      <View style={styles.container}>
      <View style={styles.rect1}>
        <Slideshow 
          dataSource={item.imageOthers}/>
      </View>
      <ScrollView contentContainerStyle={{flex:1}}>
        <View style={{ flex: 0.1, backgroundColor: "#f0f8ff", padding: 10 }} >
          <Text style={{textAlignVertical: "center",textAlign: "center", fontWeight: "bold"}} >{item.imageTitle}</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: "#f0ffff", padding: 10 }}>
          <Text >{item.imageDesc}</Text>
        </View>
        <View>
        <TouchableOpacity
        style={commStyle.btnBackStyle}
        onPress={backToLogin}
        >
        <Text style={commStyle.btnTextStyle}>Back</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>  
      </View>

      
    );

    

};