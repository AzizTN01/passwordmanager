import React from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, TextInput,FlatList, ScrollView
} from 'react-native';
 
import BottomNavigation from '../components/Bottomnavigation';
import Cat_Card from '../components/CatCard';
import Card from '../components/Card';

const data = [
  { key: '1', name: 'apps',icon:'apps' },
  { key: '2', name: 'social' ,icon:'people-alt'  },
  { key: '3', name: 'stores',icon:'local-grocery-store'  },
  { key: '4', name: 'banks' ,icon:'attach-money' },
  
];
const icons = [
  { key: '1', name: 'facebook',icon:'facebook' },
  { key: '2', name: 'youtube' ,icon:'youtube'  },
  { key: '3', name: 'twitter',icon:'twitter'  },
  { key: '4', name: 'google' ,icon:'google-play' },
  { key: '5', name: 'skype' ,icon:'skype' },
  { key: '6', name: 'amazon' ,icon:'amazon' },
  { key: '7', name: 'instagram' ,icon:'instagram' },
];
const HomeScreen = ({})=>{
    return (
     
        <SafeAreaView style={styles.safe} >
    
          <View style={styles.topbar}>
  
   
          {/* search bar  */}
          <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
          />
        </View>
          </View>
        
        {/* category   */}
        <View style={styles.category}>
           {/* category list */}
          <Text style={styles.text_catgory}>Category</Text>
    
          <View>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item }) => <Cat_Card type={item.name} icon={item.icon} />}
            keyExtractor={item => item.key}
          />
          </View>
          <ScrollView>
          <View>
          <Text style={styles.text_catgory}>All</Text>
      
          <FlatList 
          data={icons}
          renderItem={({item}) => <Card  icon={item.icon} name={item.name} />}
          keyExtractor={item => item.key}
    
          />
      
    
      </View>
          </ScrollView>
          
        </View>
        <View>
          </View>
        
        <BottomNavigation />
        </SafeAreaView>
        
      );
    
    }
    
    const styles = StyleSheet.create({
    safe:{
    flex:1,
    backgroundColor:'#261a2b',
    },
    topbar:{
      flex:1,
      top:1,
    
    },
    
    parent:{
      padding:20,
      position: 'relative',
      flex: 1,
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
    category:{
      position: 'absolute',
      top: 150,
      left: 5,
      right: 10,
      padding: 10,
      flex:1,
      
    },
    text_catgory:{
      left:10,
      fontSize:24,
      fontWeight:'bold',
    
      color: '#bdbdbd',
     
    
    },
  
    container: {
      backgroundColor: '#3a383b',
      position: 'absolute',
      top: 100,
      left: 20,
      right: 20,
      height: 40,
      borderRadius: 10,
      padding: 5,
      flexDirection: 'row',
    },
    input: {
      flex: 1,
      fontSize: 18,
      color: '#bdbdbd',
      
    },
    
    });


export default  HomeScreen;