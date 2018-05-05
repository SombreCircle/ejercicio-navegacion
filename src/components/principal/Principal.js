import React from 'react';
import {View, Text, Button, StyleSheet,Image,TextInput} from 'react-native';
export default( { history } ) => (
  <View>
    <Text style={styles.fontSize}>principal</Text>
    <Button color='blue' title="cambio a segunda" onPress={()=>history.push("/segunda")}> </Button>
    <Button color='yellow' title="cambio a tercera" onPress={()=>history.push("/tercera")}> </Button>
    <Button color='orange' title="cambio a cuarta" onPress={()=>history.push("/cuarta")}> </Button>
    <Button color='green' title="cambio a quinta" onPress={()=>history.push("/quinta")}> </Button>
    <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>
    <Image
style={{width: 50, height: 50}}
source={{uri: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2017/08/mejores-juegos-sonic-hedgehog.jpg?itok=oSdD7Dur'}}/>
<Image
style={{width: 50, height: 50}}
source={require('../../assets/imagenes/imagen1.jpg')}/>
  </View>
);
const styles = StyleSheet.create({

  fontSize:{
   fontSize:20,
   color:'red',
   marginTop:30
 }
})
