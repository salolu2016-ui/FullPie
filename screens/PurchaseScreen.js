/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : PurchaseScreen.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : Julio 2026
 * Descripción :
 * Pantalla de compra del pie seleccionado.
 * ==========================================================
 */

import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

import Colors from '../theme/colors';

export default function PurchaseScreen() {

    return (

        <SafeAreaView style={styles.container}>

            {/* ======================================================
                Encabezado de la pantalla.
                ====================================================== */}
            <View style={styles.header}>

                <Image
                    source={require('../assets/images/logo_fullpie.png')}
                    style={styles.logo}
                />

                <Text style={styles.title}>
                    Comprar Pie
                </Text>

            </View>

            {/* ======================================================
                Imagen del producto.
                ====================================================== */}
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/img_pie_uva.jpeg')}
                    style={styles.productImage}
                />

            </View>

            {/* ======================================================
                Información de porciones.
                ====================================================== */}
            <View style={styles.noteContainer}>

                <Text style={styles.noteText}>
                    ℹ️ Rinde aproximadamente para 8 porciones.
                </Text>

            </View>

            {/* ======================================================
                Información del producto.
                ====================================================== */}
            <View style={styles.infoContainer}>

                <Text style={styles.productName}>
                    Pie de Uva
                </Text>
                <Text style={styles.productPrice}>
                    $12.50
                </Text>
                <Text style={styles.label}>
                    Cantidad
                </Text>

                <View style={styles.quantityContainer}>

                    <Text style={styles.quantityButton}>
                        −
                    </Text>

                    <Text style={styles.quantity}>
                        1
                    </Text>

                    <Text style={styles.quantityButton}>
                        +
                    </Text>

                </View>

                <Text style={styles.label}>
                    Subtotal
                </Text>

                <Text style={styles.subtotal}>
                    $12.50
                </Text>

            </View>

            {/* ======================================================
                Observaciones.
                ====================================================== */}
            <View style={styles.observationsContainer}>
                    <Text style={styles.label}>
                            Observaciones
                        </Text>

                        <TextInput
                            style={styles.observationsInput}
                            placeholder="Escribe aquí alguna indicación para tu pedido..."
                            multiline
                            numberOfLines={4}
                        />
            </View>

            {/* ======================================================
                Botón Confirmar compra.
                ====================================================== */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.confirmButton}>

                <Text style={styles.confirmButtonText}>
                    Confirmar compra
                </Text>

            </TouchableOpacity>
            </View>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    /* ======================================================
       Contenedor principal.
       ====================================================== */
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
    },

    /* ======================================================
       Encabezado.
       ====================================================== */
    header: {
        marginTop: 20,
        alignItems: 'center',
    },

    /* ======================================================
       Logo FullPie.
       ====================================================== */
    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
    },

    /* ======================================================
       Título.
       ====================================================== */
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.primary,
        marginTop: 10,
    },

    /* ======================================================
       Imagen del producto.
       ====================================================== */
    imageContainer: {
        marginTop: 25,
        alignItems: 'center',
    },

    /* ======================================================
       Nota informativa.
       ====================================================== */
    noteContainer: {
        marginTop: 20,
    },

    noteText: {
        textAlign: 'center',
        color: Colors.text,
        fontSize: 15,
    },

    /* ======================================================
       Información del producto.
       ====================================================== */
    infoContainer: {
        marginTop: 25,
    },

    /* ======================================================
       Observaciones.
       ====================================================== */
    observationsContainer: {
        marginTop: 25,
    },

    /* ======================================================
       Botón.
       ====================================================== */
    buttonContainer: {
        marginTop: 30,
    },

    /* ======================================================
   Imagen del producto.
   ====================================================== */
    productImage: {
        width: 250,
        height: 250,
        borderRadius: 20,
        resizeMode: 'cover',
},

    /* ======================================================
    Nombre del producto.
    ====================================================== */
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
        textAlign: 'center',
        marginBottom: 10,
    },

    /* ======================================================
    Precio del producto.
    ====================================================== */
    productPrice: {
        fontSize: 20,
        color: Colors.text,
        textAlign: 'center',
    },

    /* ======================================================
   Etiquetas.
   ====================================================== */
label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 20,
    textAlign: 'center',
},

/* ======================================================
   Contenedor de cantidad.
   ====================================================== */
quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
},

/* ======================================================
   Botones + y -.
   ====================================================== */
quantityButton: {
    fontSize: 32,
    color: Colors.primary,
    marginHorizontal: 25,
},

/* ======================================================
   Cantidad.
   ====================================================== */
quantity: {
    fontSize: 24,
    color: Colors.text,
    fontWeight: 'bold',
},

/* ======================================================
   Subtotal.
   ====================================================== */
subtotal: {
    fontSize: 24,
    color: Colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
},

/* ======================================================
   Caja de observaciones.
   ====================================================== */
observationsInput: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 15,
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top',
    backgroundColor: '#FFFFFF',
    fontSize: 15,
},

/* ======================================================
   Botón Confirmar compra.
   ====================================================== */
confirmButton: {
    backgroundColor: Colors.button,
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
},

confirmButtonText: {
    color: Colors.buttonText,
    fontSize: 18,
    fontWeight: 'bold',
},

});