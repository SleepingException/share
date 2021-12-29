import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Home from './stackNavigator';
import Profile from './Screens/Profile';
import Favorites from './Screens/FavoritesScreen';
import Ads from './Screens/AdsScreen';
import Chat from './Screens/ChatScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      // activeColor="#e91e63"
      screenOptions={{
        headerShown: false,
        tabBarScrollEnabled: true,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 40,
          marginHorizontal: 20,
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
        }
      }}
    >
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarLabel: 'Поиск',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" color={focused ? 'black' : 'gray'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="heart" color={focused ? 'black' : 'gray'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ads"
        component={Ads}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{
              width: 55,
              height: 55,
              marginBottom: 50, 
              backgroundColor: 'gray',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <MaterialCommunityIcons name="plus" color={focused ? 'black' : 'white'} size={30} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Сообщения',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="message" color={focused ? 'black' : 'gray'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="account" color={focused ? 'black' : 'gray'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;