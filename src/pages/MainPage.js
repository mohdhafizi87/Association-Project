import React, { useLayoutEffect, useState } from "react";
import ScrollView, { StatusBar, StyleSheet, FlatList, Text, View, SafeAreaView, TouchableHighlight, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { recipes } from "../data/dataArrays";
import MenuImage from "../components/MenuImage/MenuImage";
import { getCategoryName } from "../data/MockDataAPI";
import {useSelector} from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export const MainPage = (props) => {
    const { navigation } = props;


    const listData = useSelector(state => state.listing);
    const listDataNews = useSelector(state => state.listingnews);

    console.log('Value 1: ', listDataNews);

    useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <MenuImage
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
        headerRight: () => <View />,
      });
    }, []);
  
    const onPressRecipe = (item) => {
      
      navigation.navigate("Details item", { item });
    };

    const renderRecipes = ({ item }) => (
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.imageURL }} />
          <Text style={styles.title}>{item.imageTitle}</Text>
          <Text style={styles.category}>{item.imageDescSimple}</Text>
        </View>

        
      </TouchableHighlight>
    );

    const renderNews = ({ item }) => (
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
        <View >
          <Image style={stylesFzy.photo} source={{ uri: item.imageURL }} />
          <Text style={styles.title}>{item.imageTitle}</Text>
          <Text style={styles.category}>{item.imageDescSimple}</Text>
        </View>

        
      </TouchableHighlight>
    );

   

    function HomeScreen() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={listData.list} renderItem={renderRecipes} keyExtractor={(item) => item.imageIdx} />
        </View>
      );
    }
    
    function SettingsScreen() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Setting</Text>
        </View>
      );
    }

    function NewsScreen() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         
          <FlatList vertical showsVerticalScrollIndicator={false} data={listDataNews.list} renderItem={renderNews} keyExtractor={(item) => item.imageIdx} />
          
        </View>
      );
    }

    const Tab = createBottomTabNavigator();
  

    const stylesFzy = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
      photo: {
        height: 200,
          flex: 1,
          width: null,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginTop: 10
      },
    });
   
  
    return (
      <>
      

<View style={{flex: 1}}>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: () => (<Image source={require("./Images/002-main-menu.png")} style={{width: 20, height: 20}} />)
      }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{
          tabBarIcon: () => (<Image source={require("./Images/001-settings.png")} style={{width: 20, height: 20}} />)
      }}
      />
      <Tab.Screen name="News" component={NewsScreen} 
        options={{
          tabBarIcon: () => (<Image source={require("./Images/003-news.png")} style={{width: 20, height: 20}} />)
      }}
      />
    </Tab.Navigator>
  </View>

</>

      
    );

};