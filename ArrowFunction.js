import React from 'react';  
import { StyleSheet, View, Text, Button } from 'react-native';  
export default class ArrowFunction extends React.Component{
    
    render(){
        const { navigation } = this.props;  
 const getText= navigation.getParam('text');
 return (  
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>   
        <Text style={styles.textStyle}>User Name: {JSON.stringify(getText)}</Text>  
        </View>  
        );  
    }        
    }

