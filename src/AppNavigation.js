import * as React from 'react';
import { View, StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import Inbox from './containers/Inbox';
import styles from './common/Styles';

const CustomStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const CustomDrawerContent = (props) => {
  return (
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1, backgroundColor: '#ccc', marginTop: -4, height: 250, alignItems: 'center', justifyContent: 'center'}}>
          <Avatar size="xlarge" icon={{name: 'envelope', type: 'font-awesome-5', color: "#282828"}} />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function InboxScreen() {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Home" 
      drawerContentOptions={{
        contentContainerStyle: {marginVertical: 0, margin: 0},
        labelStyle: {color: "#282828"},
        itemStyle: {marginVertical: 0, marginHorizontal: 0, paddingLeft: 20}
      }}>
      <Drawer.Screen name="Inbox" component={Inbox} options={{ drawerIcon: () => <Entypo size={23} name="folder" style={{color: '#282828'}} /> }} />
    </Drawer.Navigator>
  );
}

export default function AppNavigation() {
  return (
  <View style={{flex: 1}}>
        <CustomStatusBar backgroundColor="#ccc" barStyle="light-content" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="User" component={InboxScreen} />
          </Stack.Navigator>
        </NavigationContainer>
  </View>
  );
}