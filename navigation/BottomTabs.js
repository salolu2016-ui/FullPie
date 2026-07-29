/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : BottomTabs.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : 2026-07-28
 * Descripción :
 * Configura la navegación inferior de la aplicación
 * mediante dos pestañas:
 * - Inicio
 * - Menú de Pies
 * ==========================================================
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';

// Crea el navegador de pestañas.
const Tab = createBottomTabNavigator();

/**
 * Componente que administra la navegación principal
 * de la aplicación.
 */
export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          // Configuración de los íconos de cada pestaña.
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = 'home';
            } else if (route.name === 'Menú de Pies') {
              iconName = 'restaurant';
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
        />

        <Tab.Screen
          name="Menú de Pies"
          component={MenuScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}