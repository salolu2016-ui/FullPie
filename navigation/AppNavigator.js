/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : AppNavigator.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : Julio 2026
 * Descripción :
 * Configura la navegación principal de la aplicación
 * mediante un Stack Navigator.
 * ==========================================================
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';

import PurchaseScreen from '../screens/PurchaseScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

    return (

        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >

                <Stack.Screen
                    name="HomeTabs"
                    component={BottomTabs}
                />

                <Stack.Screen
                    name="Purchase"
                    component={PurchaseScreen}
                />

            </Stack.Navigator>

        </NavigationContainer>

    );

}