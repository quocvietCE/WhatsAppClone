import React from 'react';
import {View, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StoryScreen from '../screens/StoryScreen';

import MainTab from './MainTabNavigator';

import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';

Octicons.loadFont();
MaterialCommunityIcons.loadFont();

const RootStack = createStackNavigator();

const RootRouter = () => (
  <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <View style={styles.headerRight}>
            <Octicons name="search" size={22} color={Colors.light.background} />
            <MaterialCommunityIcons
              name="dots-vertical"
              size={22}
              color={Colors.light.background}
            />
          </View>
        ),
      }}>
      <RootStack.Screen
        name="Root"
        component={MainTab}
        options={{title: 'WhatsApp'}}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);
export default RootRouter;

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
    marginRight: 10,
  },
});
