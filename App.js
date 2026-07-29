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
import BottomTabs from './navigation/BottomTabs';

/**
 * Componente principal de la aplicación.
 */
export default function App() {
  return <BottomTabs />;
}