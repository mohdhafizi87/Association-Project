import {StyleSheet} from 'react-native';

export const commStyle = StyleSheet.create({
    textOutput: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10,
      margin: 10,
      textAlign: 'center',
    },
    headerBackground: {
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    bodyBackground: {
      backgroundColor: 'white',
      height: 30,
      flex: 2,
      borderBottomColor: 'red',
      borderBottomWidth: 2,
    },
    footBackground: {
      backgroundColor: '#C70039',
      flex: 0.3,
      fontSize: 12,
      textAlign: 'center',
    },
    footText: {
      fontSize: 15,
      fontWeight: 'bold',
      margin: 10,
      textAlign: 'center',
      color: 'white',
    },
    mainTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      textAlign: 'center',
      color: 'black',
      fontStyle: 'italic',
    },
    subTitles: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 1,
      textAlign: 'center',
      color: 'black',
    },
    mainImage: {
      resizeMode: 'contain', 
    },
    textInputType1: {
      backgroundColor: '#F5EEF8',
      fontSize: 20,
      marginBottom: 5,
      marginTop:20,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 10,
      padding: 10,
    },
    textInputRegister: {
      backgroundColor: '#F5EEF8',
      fontSize: 20,
      marginBottom: 5,
      marginTop:5,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 10,
      padding: 10,
    },
    textInputType2: {
      backgroundColor: '#F5EEF8',
      fontSize: 20,
      marginBottom: 5,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 10,
      padding: 10,
    },
    btnStyle: {
      backgroundColor: '#BC2507',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      marginBottom:10,
      padding: 15,
      borderRadius: 10,
    },
    btnTextStyle: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    btnBackStyle: {
      backgroundColor: '#BC9307',
      marginTop: 20,
      marginLeft: 0,
      marginRight: 0,
      marginBottom:10,
      paddingRight: 40,
      paddingTop:15,
      paddingLeft:40,
      paddingBottom: 15,
      borderRadius: 10,
    },
    btnProcStyle: {
      backgroundColor: '#BC2507',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      marginBottom:10,
      paddingRight: 40,
      paddingTop:15,
      paddingLeft:40,
      paddingBottom: 15,
      borderRadius: 10,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    loadingIcon: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });