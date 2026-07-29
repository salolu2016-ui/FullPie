/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : MenuScreen.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : 2026-07-28
 * Descripción :
 * Pantalla que mostrará el catálogo de pies de la aplicación
 * FullPie. En esta pantalla se implementará el diseño
 * responsivo solicitado en la actividad, permitiendo
 * visualizar los productos en orientación vertical y
 * horizontal.
 * ==========================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Componente que representa la pantalla del menú de pies.
 *
 * En esta primera fase únicamente se muestra un texto para
 * validar el funcionamiento de la navegación entre pestañas.
 */
export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menú de Pies</Text>
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