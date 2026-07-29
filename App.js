/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : App.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : 2026-07-28
 * Descripción :
 * Punto de entrada principal de la aplicación.
 * Inicializa la navegación mediante las pestañas
 * inferiores.
 * ==========================================================
 */

import React from 'react';

//import * as NavigationBar from 'expo-navigation-bar';

import { useFonts } from 'expo-font';

import {
  PlayfairDisplay_700Bold,
  PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';

import {
  Lato_400Regular,
  Lato_400Regular_Italic,
} from '@expo-google-fonts/lato';


import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import BottomTabs from './navigation/BottomTabs';

//import * as NavigationBar from 'expo-navigation-bar';

/**
 * Componente principal de la aplicación.
 */
export default function App() {



  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    PlayfairDisplay_600SemiBold,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <BottomTabs />;

}