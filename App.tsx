
import React from 'react';
import TopBar from './components/TopBar';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() { 


  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#261a2b',
        }
      }}
      >
      <Stack.Screen 
      name="Home"
      component={HomeScreen}
      options={{ headerTitle: (props) => <TopBar navigation={props.navigation}/> 
     }}
      />
       <Stack.Screen 
      name="Profile"
      component={Profile}
              options={{title: 'Welcome'}}
      />
      </Stack.Navigator>


  </NavigationContainer>
   
    
   
  
  );

}

export default App;
