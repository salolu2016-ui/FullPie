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
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import Colors from '../theme/colors';

// Crea el navegador de pestañas.
const Tab = createBottomTabNavigator();

/**
 * Componente que administra la navegación principal
 * de la aplicación.
 */
export default function BottomTabs() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.tertiary,
            borderTopWidth: 0,
            elevation: 10,
            
            shadowColor: '#000',
            shadowOpacity: 0.15,
            height: 125,
            paddingBottom: 6,
            paddingTop: 6,
            },

            tabBarActiveTintColor: '#ff8787',

            tabBarInactiveTintColor: Colors.pieCrustLight,

            tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            //marginBottom: 2,
            },

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
    
  );
}