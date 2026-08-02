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
import { useWindowDimensions } from 'react-native';

// Crea el navegador de pestañas.
const Tab = createBottomTabNavigator();

/**
 * Componente que administra la navegación principal
 * de la aplicación.
 */
export default function BottomTabs() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

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

    height: isLandscape ? 68 : 112,
    paddingTop: isLandscape ? 2 : 6,
    paddingBottom: isLandscape ? 2 : 6,
},

            tabBarActiveTintColor: '#ff8787',

            tabBarInactiveTintColor: Colors.pieCrustLight,

            tabBarIconStyle: {
              marginTop: 2,
          },

    tabBarLabelStyle: {
    fontSize: isLandscape ? 9 : 11,
    fontWeight: '600',
    marginBottom: isLandscape ? 2 : 4,
},

          // Configuración de los íconos de cada pestaña.
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = 'home';
            } else if (route.name === 'Menú de Pies') {
              iconName = 'restaurant';
            }

            return (
              <Ionicons
                name={iconName}
                size={isLandscape ? 20 : 24}
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