import React from 'react';
import {View, Text,Button,StyleSheet}from 'react-native';
export default ({history})=>(
  <View>
    <Text style={styles.fontSize}>quinta
    </Text>
    <Button color='green' title="cambio a anterior" onPress={()=>history.push("/")}> </Button>
  </View>
);

const styles = StyleSheet.create({
  fontSize:{
   fontSize:20,
   color:'red',
   marginTop:30
 }
})
