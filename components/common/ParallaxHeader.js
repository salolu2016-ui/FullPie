/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : ParallaxHeader.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : 2026-07-28
 * Descripción :
 * Componente reutilizable que muestra el banner principal
 * de la aplicación. En futuras versiones incorporará el
 * efecto Parallax solicitado en la actividad.
 * ==========================================================
 */

import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
} from 'react-native';

/**
 * Componente reutilizable que presenta el banner principal
 * de la aplicación FullPie.
 */
    export default function ParallaxHeader({ scrollY }) {
    const translateY = scrollY.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [-96, 0, 146],
    extrapolate: 'clamp',
    });

    const scale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [1.25, 1],
    extrapolate: 'clamp',
    });
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/banner_fullpie.png')}
        resizeMode="contain"
        style={[
            styles.banner,
            {
            transform: [
                { translateY },
                { scale },
            ],
            },
        ]}
        />
    </View>
  );
}

/**
 * Estilos del componente.
 */
const styles = StyleSheet.create({
    container: {
    width: '100%',
    backgroundColor: '#F3D6F6',
    overflow: 'hidden',
    paddingBottom: 8,
},

    banner: {
    width: '100%',
    height: 129,
    },
});