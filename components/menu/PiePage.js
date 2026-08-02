/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : PiePage.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : Julio 2026
 * Descripción :
 * Componente reutilizable que representa una página
 * completa de un pie dentro del catálogo horizontal.
 * ==========================================================
 */

import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import Colors from '../../theme/colors';

import { useNavigation } from '@react-navigation/native';

import PiePageLandscape from './PiePageLandscape';

/**
 * Página individual del catálogo.
 */
export default function PiePage({
  pie,
  index,
  total,
}) {

    const { width, height } = useWindowDimensions();

    const isLandscape = width > height;

    const navigation = useNavigation();

    if (isLandscape) {
  return (
    <PiePageLandscape
      pie={pie}
      index={index}
      total={total}
    />
  );
}

    //Responsivo para tabletas
    const isTablet = width >= 768;

  return (

   <View
      style={[
        styles.container,
        {
          width: isLandscape ? width * 0.98 : width,
        },
      ]}
    >

<View
    style={[
        styles.topSection,
        isLandscape && styles.topSectionLandscape,
    ]}
>

    

    <View
      style={[
        styles.photoCard,
        isLandscape && styles.photoCardLandscape,
        isTablet && styles.photoCardTablet,
      ]}
    >
    

      <Image
        source={pie.imagen}
        style={[
        styles.image,
        isLandscape && styles.imageLandscape,
      ]}
        resizeMode="cover"
      />

      <Text style={styles.title}>
        {pie.nombre}
      </Text>

    </View>


  {/* ======================================================
        Card 2: Muestra el precio del pie y el botón Comprar.
        ====================================================== */}

   <View
      style={[
        styles.priceCard,
        isLandscape && styles.priceCardLandscape,
      ]}
    >

    <Text style={styles.priceLabel}>
        Precio
    </Text>

    <Text style={styles.price}>
        {pie.precio}
    </Text>

    {/* ======================================================
        Botón para iniciar el proceso de compra del pie.
    ====================================================== */}
     <TouchableOpacity
        style={styles.buyButton}
        onPress={() =>
            navigation.navigate('Purchase', {
                pie,
            })
        }
    >
        <Text style={styles.buyButtonText}>
            Comprar
        </Text>
    </TouchableOpacity>

    </View>

  </View>
  {/* ======================================================
      Card 3: Muestra ingredientes y descripción del pie.
      ====================================================== */}
  {/* ======================================================
      Contenedor de la Card de información.
      ====================================================== */}
    <View
        style={[
            styles.infoContainer,
            isLandscape && styles.infoLandscape,
        ]}
    >

  {/* Flecha izquierda */}
  {index > 0 && (
    <Text style={styles.leftArrow}>
      ‹
    </Text>
  )}

  {/* Flecha derecha */}
  {index < total - 1 && (
    <Text style={styles.rightArrow}>
      ›
    </Text>
)}

  {/* ======================================================
      Card 3: Muestra ingredientes y descripción del pie.
      ====================================================== */}
  <View style={styles.infoCard}>

    <Text style={styles.sectionTitle}>
      Ingredientes
    </Text>

    {pie.ingredientes.map((ingrediente, index) => (
      <Text
        key={index}
        style={styles.ingredient}
      >
        • {ingrediente}
      </Text>
    ))}

    <Text style={styles.sectionTitle}>
      Descripción
    </Text>

    <Text style={styles.description}>
      {pie.descripcion}
    </Text>

  </View>

</View>

</View>

  );

}

const styles = StyleSheet.create({

 /* ======================================================
   Contenedor principal de la página del pie.
   ====================================================== */
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 8,
      paddingBottom: 16,
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.primary,
  },

  image: {
  width: '100%',
  height: 145,
  borderRadius: 16,
  //marginTop: 10,
 },

 card: {
  width: '90%',
  backgroundColor: 'rgba(248, 248, 248, 0.88)',
  borderRadius: 20,
  padding: 20,
  alignItems: 'center',

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.25,
  shadowRadius: 75,

  elevation: 85,
},

price: {
  fontSize: 17,
  fontWeight: 'bold',
  color: Colors.primary,
  marginTop: 12,
},

priceLabel: {
  fontSize: 20,
  fontWeight: '600',
  marginBottom: 10,
  color: Colors.primary,
},

topSection: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '92%',
  marginTop: 0,
},

photoCard: {
  width: '58%',
  backgroundColor: 'rgba(248, 248, 248, 0.88)',
  borderRadius: 20,
  padding: 15,
  alignItems: 'center',
  elevation: 4,
},

priceCard: {
  width: '40%',
  backgroundColor: 'rgba(248, 248, 248, 0.88)',
  borderRadius: 20,
  padding: 15,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 4,
},

/* ======================================================
   Estilos del botón Comprar.
   ====================================================== */
buyButton: {
  marginTop: 20,
  backgroundColor: Colors.button,
  width: '100%',
  paddingVertical: 12,
  borderRadius: 12,
  alignItems: 'center',
},

buyButtonText: {
  color: Colors.buttonText,
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},

  /* ======================================================
   Estilos de la Card de información.
   ====================================================== */
infoCard: {
  width: '100%',
  backgroundColor: 'rgba(255, 248, 255, 0.88)',
  borderRadius: 20,
  paddingVertical: 15,
  paddingHorizontal: 35,
  elevation: 4,
},

sectionTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: Colors.primary,
  marginBottom: 8,
},

ingredient: {
  fontSize: 14,
  color: Colors.text,
  marginBottom: 4,
},

description: {
  marginTop: 3,
  fontSize: 14,
  color: Colors.text,
  lineHeight: 18,
},

/* ======================================================
   Contenedor de la Card de información.
   ====================================================== */
infoContainer: {
  width: '92%',
  position: 'relative',
  marginTop: 15,
},

/* ======================================================
   Flecha izquierda.
   ====================================================== */
leftArrow: {
  position: 'absolute',
  left: 8,
  top: '2%',
  fontSize: 34,
  color: Colors.primary,
  fontWeight: 'bold',
  zIndex: 10,
  opacity: 0.55,
},

/* ======================================================
   Flecha derecha.
   ====================================================== */
rightArrow: {
  position: 'absolute',
  right: 8,
  top: '2%',
  fontSize: 34,
  color: Colors.primary,
  fontWeight: 'bold',
  zIndex: 10,
  opacity: 0.55,
},

  /* ======================================================
    Landscape.
    ====================================================== */

  topSectionLandscape: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
},

  infoLandscape: {

      width: '96%',
      marginTop: 10,

  },

  photoCardLandscape: {
  width: '60%',
},

priceCardLandscape: {
  width: '36%',
},

imageLandscape: {
  height: 110,
},

photoCardTablet: {
  width: '65%',
  maxWidth: 500,
},

});