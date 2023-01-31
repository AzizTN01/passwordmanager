import React from 'react';
import { 
  View, Text, TouchableOpacity, StyleSheet 
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
const Cat_Card = ({type,icon}) =>{
    return(
    <View style={styles.card}>
       <View style={styles.circle}>
        <Icon name={icon} size={20} color="black" />
      </View>
      <View style={styles.info}>
        <Text style={styles.name} >{type}</Text>
        <Text style={styles.password}> 10 passwords</Text>
      </View>
    </View>

    );
    
    


};
const styles = StyleSheet.create({
card:{
   marginTop:20,
   marginRight: 15,
   marginBottom:20,
   height:150,
   width:110,
   borderRadius: 20,
   backgroundColor:'#3b3b3b',
   alignItems: 'center',
    justifyContent: 'flex-start',
},
circle: {
    marginTop:14,
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#f5ad42',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info:{
  
    marginTop:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name:{
   padding:5,
    color:'#bdbdbd',
    fontSize:18,
    fontWeight:'bold',

  },
  password:{
    color:'#bdbdbd',
    fontSize:10,
  }


});
export default Cat_Card;