import React from 'react'
import Home from './Screens/Home'
import ItemDetails from './Screens/ItemDetails'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Navigate(){
    return(
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='ItemDetails'
                    component={ItemDetails}
                    options={{title: ''}}
                />
            </Stack.Navigator>
    );
}

export default Navigate;