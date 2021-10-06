/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  Text,
  useColorScheme,
  View,TextInput,Button,Image,} from 'react-native';

  const details = [{
		"roll no": "qwerty",
		"name": "ashi",
		"father name": "mani",
		"age": "4"
	},
	{
		"roll no": "qwerty",
		"name": "ashi",
		"father name": "mani",
		"age": "14"
	}, {
		"roll no": "qwerty",
		"name": "manisha",
		"father name": "mani",
		"age": "18"
	},
  {
		"roll no": "qwerty",
		"name": "rajan",
		"father name": "mani",
		"age": "21"
	},
	{
		"roll no": "qwerty",
		"name": "shanu",
		"father name": "mani",
		"age": "26"
	}, {
		"roll no": "qwerty",
		"name": "shirine",
		"father name": "mani",
		"age": "23"
	}
]
class App extends Component {

  constructor(props) {
  super(props);
      
  this.palindrome("radar");
  //this.Array()
  } 

  newArray() {
    
    
}   
palindrome(str) {
  var reverseStr = str.split('').reverse().join(''); 
  console.log(str)
  console.log(str == reverseStr ? "String is Palindrome" : "String is not Palindrom")
}

Array(){
    let newDetails = details.filter(function(item){
      return item.age < 20;
    
     }).map(function({name}){
          return  name;
      })
      console.log(newDetails);
  }
    
  
render(){
    return (<View>

    </View>

    );
  }
}

export default App;
