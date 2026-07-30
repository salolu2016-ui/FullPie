/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : AppNavigator.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : Julio 2026
 * Descripción :
 * Navegación principal de la aplicación.
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

            <Stack.Navigator>

                {/* ======================================================
                    Menú principal.
                    ====================================================== */}

                <Stack.Screen
                    name="Main"
                    component={BottomTabs}
                    options={{
                        headerShown: false,
                    }}
                />

                {/* ======================================================
                    Popup de compra.
                    ====================================================== */}

                <Stack.Screen
                    name="Purchase"
                    component={PurchaseScreen}
                    options={{
                        presentation: 'transparentModal',
                        animation: 'fade',
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: 'transparent',
                        },
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>

    );

}