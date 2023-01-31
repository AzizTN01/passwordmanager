import React from 'react';
import { 
  View, Text, TouchableOpacity, StyleSheet 
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const BottomNavigation = (Profile) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={ () => 
        navigation.navigate('Profile', {name: 'Jane'})

      }
      style={styles.row}>
      <MaterialIcons name='home' size={30} color='#807e7e' />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
      <MaterialIcons name='add-circle' size={30} color='#807e7e' />
        <Text style={styles.text}>Add category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
      <MaterialIcons name='settings' size={30} color='#807e7e' />
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 1,
    flex:1,
    left: 0,
    right: 0,
    height:80,
    flexDirection: 'row',
    backgroundColor: '#29282b',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    paddingBottom:20,
    paddingTop:10,
  
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    
  },
  text:{
    color: '#bdbdbd',
    fontSize:19,
  },
});

export default BottomNavigation ;
