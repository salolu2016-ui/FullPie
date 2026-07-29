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

import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import ParallaxHeader from '../components/common/ParallaxHeader';

import Colors from '../theme/colors';

    /**
 * Pantalla que muestra el catálogo de pies.
 */
export default function MenuScreen() {

    const scrollY = React.useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView
        style={styles.container}
        edges={['top']}
        >

        {/* Banner principal */}
        <ParallaxHeader scrollY={scrollY} />

        </SafeAreaView>
    );
    } 

/**
 * Estilos de la pantalla.
 */
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

});
