import * as React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimContainer from './containers/SimContainer';
import Cart from './containers/Cart';
import Order from './containers/Order';
import Profile from './containers/Profile';
import styles from './common/Styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

function BottomTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
        style: { position: 'absolute', bottom: 50, height: 70, backgroundColor: '#F6F7F8'},
        labelStyle: {fontSize: 16, marginBottom: 10},
        activeTintColor: '#2AACE2'
      }}>
      <Tab.Screen name="Search" component={SimContainer} options={{
          tabBarLabel: 'Search',
          labelStyle: {fontSize: 16},
          tabBarIcon: ({ color = '#282828', size = 12 }) => (
            <MaterialIcons name="search" color={color} size={24} />
          ),
        }} />
      <Tab.Screen name="Cart" component={Cart} options={{
          tabBarLabel: 'Cart',
          labelStyle: {fontSize: 16},
          tabBarIcon: ({ color = '#282828', size = 12 }) => (
            <MaterialIcons name="shopping-cart" color={color} size={24} />
          ),
        }} />
      <Tab.Screen name="Orders" component={Order} options={{
          tabBarLabel: 'Orders',
          labelStyle: {fontSize: 16},
          tabBarIcon: ({ color = '#282828', size = 12 }) => (
            <MaterialCommunityIcons name="truck" color={color} size={24} />
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          labelStyle: {fontSize: 16},
          tabBarIcon: ({ color = '#282828', size = 12 }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <View style={{flex: 1}}>
          <CustomStatusBar backgroundColor="#2AACE2" barStyle="light-content" />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="SimList" component={BottomTabs} />
            </Stack.Navigator>
          </NavigationContainer>
    </View>
  );
}