import React from 'react';
import Home from './stackNavigator';
import Profile from './Screens/Profile';
import Favorites from './Screens/FavoritesScreen';
import Ads from './Screens/AdsScreen';
import Chat from './Screens/ChatScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
        screenOptions = {{
          headerShown: false,
          tabBarScrollEnabled: true,
          tabBarStyle:{
            backgroundColor: '#000',
          }
        }}
    >
      <Tab.Screen 
      name="Search" 
      component={Home}
      />
      <Tab.Screen 
      name="Favorites" 
      component={Favorites}
      />
      <Tab.Screen 
      name="Ads" 
      component={Ads}
      />
       <Tab.Screen 
      name="Chat"
      component={Chat}
      />
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
      />
    </Tab.Navigator>
  );
}

export default Tabs;