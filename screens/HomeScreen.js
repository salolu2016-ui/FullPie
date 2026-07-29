/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : HomeScreen.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : Julio 2026
 * Descripción :
 * Pantalla principal de la aplicación FullPie.
 * En esta pantalla se mostrará el Parallax Header
 * y el contenido de bienvenida.
 * ==========================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Componente que representa la pantalla de Inicio.
 */
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inicio</Text>
    </View>
  );
}

/**
 * Estilos de la pantalla.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});