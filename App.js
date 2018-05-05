import React from 'react';
import Quinta from "./src/components/quinta/quinta";
import Cuarta from "./src/components/cuarta/cuarta";
import Tercera from "./src/components/tercera/tercera";
import Segunda from "./src/components/segunda/segunda";
import {NativeRouter,Route,Switch}from'react-router-native';
import Principal from './src/components/principal/Principal';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
       <View>
        <Switch>
         <Route exact path="/" component={Principal}/>
         <Route exact path="/segunda" component={Segunda}/>
         <Route exact path="/tercera" component={Tercera}/>
         <Route exact path="/cuarta" component={Cuarta}/>
         <Route exact path="/quinta" component={Quinta}/>
        </Switch>
       </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
