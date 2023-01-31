import React from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, Image ,TextInput,FlatList, TouchableHighlight
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const TopBar = ({})=>{
  const navigation = useNavigation();

    return(
        
        <View style={styles.topbar}>
            <View style={styles.parent}>
        <TouchableHighlight 
        onPress={ () => 
          navigation.navigate('Profile', {name: 'Jane'})

        }>
            <Image style={styles.profilepic} source={require('../assets/images/maria.jpeg')}/>
            </TouchableHighlight>
        <Text style={styles.text}>
          
            Elnaz
        </Text>
          </View>

        </View>
        
    );


    
}

const styles = StyleSheet.create({
    topbar:{
        flex: 1,
        justifyContent: 'flex-start',
    },

    parent:{
        padding:20,
        position: 'relative',
       
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      
      text:{
      left:20,
      fontSize:24,
      fontWeight:'bold',
      color: '#bdbdbd',
      paddingTop:20,
      },
      profilepic:{
      
        width:50,
        height:50,
        borderRadius:100,
      
      },
});
export default TopBar;