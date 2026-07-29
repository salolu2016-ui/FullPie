/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : HomeScreen.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : 2026-07-28
 * Descripción :
 * Pantalla principal de la aplicación FullPie.
 * Presenta el banner principal y un contenido
 * desplazable mediante ScrollView.
 * ==========================================================
 */

import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import ParallaxHeader from '../components/common/ParallaxHeader';

import Colors from '../theme/colors';

import { LinearGradient } from 'expo-linear-gradient';

import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

/**
 * Pantalla principal de la aplicación.
 */
export default function HomeScreen() {
 const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    //<View style={styles.container}>

         <SafeAreaView
    style={styles.container}
    edges={['top']}
  >

      {/* Banner principal */}
     <ParallaxHeader scrollY={scrollY} />

      {/* Contenido desplazable */}
       <Animated.ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={[
                styles.content,
                { paddingBottom: 50 },
                ]}
        onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        >

        <Text style={styles.title}>
            Bienvenido a FullPie 🍰
        </Text>

        <Text style={styles.description}>
            Descubre nuestros deliciosos pies artesanales,
            preparados con ingredientes frescos y mucho cariño.
        </Text>

        <Text style={styles.sectionTitle}>
            Nuestros sabores:
        </Text>

        <LinearGradient
            colors={['#f3cbb4','#d43e02a2']}
            style={styles.card}
            >

        <Text style={styles.listItem}> 🍇     Pie de Uva</Text>
        <Text style={styles.listItem}> 🍎     Pie de Manzana</Text>
        <Text style={styles.listItem}> 🍒     Pie de Cereza</Text>
        <Text style={styles.listItem}> 🍋     Pie de Limón</Text>
        <Text style={styles.listItem}> 🍓     Pie de Fresa</Text>
        <Text style={styles.listItem}> 🌰     Pie de Higo</Text>
        <Text style={styles.listItem}>🍮 Pie de Caramelo Salado</Text>

       </LinearGradient>

        <Text style={styles.note}>
            Visita la pestaña "Menú de Pies" para conocer cada
            producto y realizar tu pedido.
        </Text>

        </Animated.ScrollView>


    </SafeAreaView>
    //</View>
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

  content: {
    flexGrow: 1,
    padding: 27,
  },

  title: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 24,
    textAlign: 'center',
    color: Colors.primary,
    marginBottom: 24,
    },

    description: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    color: Colors.tertiary,
    lineHeight: 24,
    textAlign: 'center',
    },

    sectionTitle: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 22,
    color: Colors.primary,
    marginTop: 32,
    marginBottom: 12,
    },

    listItem: {
    fontFamily: 'Lato_400Regular_Italic',
    fontSize: 17,
    color: Colors.tertiary,
    marginBottom: 12,
    textAlign: 'justify',
    paddingHorizontal: 27,
    paddingVertical: 5,    
    },

    note: {
    marginTop: 15,
    fontFamily: 'Lato_400Regular_Italic',
    fontSize: 15,
    textAlign: 'center',
    color: Colors.textSecondary,
    lineHeight: 26,
    },

    card: {
    backgroundColor: Colors.card,
    borderRadius: 28,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    elevation: 6,

    marginBottom: 25,
    },

});