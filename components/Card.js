import React from 'react';
import { 
  View, Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import * as Progress from 'react-native-progress';
const percentage = 66;

const Card =({icon,name})=>{
    return(
        <View
        style={{
          height:65,
          width:'90%',
          margin:10,
          marginLeft:10,
           backgroundColor:'red',
           alignItems: 'flex-start',
           flexDirection: 'row',
           borderRadius: 20,
           backgroundColor:'#3b3b3b',}}>
            <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 15,
              backgroundColor:'#f5ad42',
              marginLeft:25,
              marginTop:10,   
              alignItems:'center',
              justifyContent:'center',
             
            }} >
              <Icon
               name={icon} 
               size={30}
               backgroundColor={'#f5ad42'}
              />


            </View>
            <View
            style={{
                marginTop:15,
                marginLeft:15,
                
            }}>
    
              <Text style={{ 
                color:'#bdbdbd',
                fontSize:16,
                fontWeight:'bold',
                
                }}>
               {name}
              </Text>
              <Text style={{ 
                color:'#bdbdbd',
                fontSize:10}}>
                exemple@email.com
              </Text>
         {/*<Progress.Circle size={40}  borderWidth={3} progress={0.3}  showsText={true} fill={true} color={'#f5ad42'} />  */}
            </View>
        </View>

    );

};
export default Card;