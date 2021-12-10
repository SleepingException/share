import React from 'react'
import Main from './screens/MainScreen'
import ItemDetails from './components/ItemDetails'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function Navigate(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='ItemDetails'
                    component={ItemDetails}
                    options={{title: ''}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigate;