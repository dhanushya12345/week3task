import React from 'react';
import {  StyleSheet ,Image,View,Text} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"

const AppText = (title,subtitle) => {
    console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()
    
    return (
        <View>
            <Text >{title}{subtitle}</Text>
            
        </View>
    );
}

export default AppText;
const styles = StyleSheet.create({
    container:{
    
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        width:"115%",
        marginVertical:10
       
       },
       text:{
          
          fontSize:18,
          textTransform:'uppercase',
          fontWeight:'bold'
       }
    
})