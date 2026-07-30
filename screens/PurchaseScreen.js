/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : PurchaseScreen.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : Julio 2026
 * Descripción :
 * Pantalla modal para la compra del pie seleccionado.
 * ==========================================================
 */

import React, { useMemo, useState } from 'react';

import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import Colors from '../theme/colors';
import { saveOrder } from '../services/orderService';

export default function PurchaseScreen({ route }) {

    const navigation = useNavigation();

    const { pie } = route.params;

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [cantidad, setCantidad] = useState(1);

    const precio = useMemo(() => {

        if (typeof pie.precio === 'number') {
            return pie.precio;
        }

        return Number(
            String(pie.precio).replace('$', '')
        );

    }, [pie]);

    const subtotal = (precio * cantidad).toFixed(2);

        /* ======================================================
   Confirmar compra.
   ====================================================== */

const confirmarCompra = async () => {

    if (nombre.trim() === '') {

        Alert.alert(
            'Nombre requerido',
            'Ingrese su nombre.'
        );

        return;

    }

    if (telefono.trim() === '') {

        Alert.alert(
            'Teléfono requerido',
            'Ingrese su teléfono.'
        );

        return;

    }

    try {

        await saveOrder({

            nombre,
            telefono,
            pie: pie.nombre,
            precio,
            cantidad,
            subtotal: Number(subtotal),

        });

        Alert.alert(

            'Compra realizada',

            'Su pedido fue registrado correctamente.\n\n¡Gracias por comprar en FullPie! 🥧',

            [
                {
                    text: 'Aceptar',
                    onPress: () => navigation.goBack(),
                },
            ]

        );

    } catch (error) {

        Alert.alert(

            'Error',

            'No fue posible registrar el pedido.\nInténtelo nuevamente.'

        );

    }

};

    return (

        <SafeAreaView
            style={styles.container}
            edges={['top']}
        >

            {/* ======================================================
                Fondo oscurecido.
                ====================================================== */}

            <View style={styles.overlay}>

                {/* ======================================================
                    Popup.
                    ====================================================== */}

                <View style={styles.popup}>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >

                        {/* ======================================================
                            Logo.
                            ====================================================== */}

                        <Image
                            source={require('../assets/images/logo_fullpie.png')}
                            style={styles.logo}
                        />

                        {/* ======================================================
                            Título.
                            ====================================================== */}

                        <Text style={styles.title}>
                            Comprar Pie
                        </Text>

                        {/* ======================================================
                            Información del producto.
                            ====================================================== */}

                        <View style={styles.productContainer}>

                            <Image
                                source={pie.imagen}
                                style={styles.productImage}
                            />

                            <View style={styles.productInfo}>

                                <Text style={styles.productName}>
                                    {pie.nombre}
                                </Text>

                                <Text style={styles.productPrice}>
                                    ${precio.toFixed(2)}
                                </Text>

                                <Text style={styles.note}>
                                    ℹ️ Rinde 8 porciones.
                                </Text>

                            </View>

                        </View>

                        {/* ======================================================
                            Datos del cliente.
                            ====================================================== */}

                        <Text style={styles.label}>
                            Nombre
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Ingrese su nombre"
                            value={nombre}
                            onChangeText={setNombre}
                        />

                        <Text style={styles.label}>
                            Teléfono
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Ingrese su teléfono"
                            keyboardType="phone-pad"
                            value={telefono}
                            onChangeText={setTelefono}
                        />
                                                {/* ======================================================
                            Cantidad.
                            ====================================================== */}

                        <View style={styles.row}>

                            <Text style={styles.labelRow}>
                                Cantidad
                            </Text>

                            <View style={styles.counterContainer}>

                                <TouchableOpacity
                                    onPress={() => {

                                        if (cantidad > 1) {
                                            setCantidad(cantidad - 1);
                                        }

                                    }}
                                >

                                    <Text style={styles.counterButton}>
                                        −
                                    </Text>

                                </TouchableOpacity>

                                <Text style={styles.quantity}>
                                    {cantidad}
                                </Text>

                                <TouchableOpacity
                                    onPress={() =>
                                        setCantidad(cantidad + 1)
                                    }
                                >

                                    <Text style={styles.counterButton}>
                                        +
                                    </Text>

                                </TouchableOpacity>

                            </View>

                        </View>

                        {/* ======================================================
                            Subtotal.
                            ====================================================== */}

                        <View style={styles.row}>

                            <Text style={styles.labelRow}>
                                Subtotal
                            </Text>

                            <Text style={styles.subtotal}>
                                ${subtotal}
                            </Text>

                        </View>

                        {/* ======================================================
                            Botones.
                            ====================================================== */}

                        <View style={styles.buttonContainer}>

                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => navigation.goBack()}
                            >

                                <Text style={styles.cancelButtonText}>
                                    Cancelar
                                </Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.confirmButton}
                                onPress={confirmarCompra}
                            >

                                <Text style={styles.confirmButtonText}>
                                    Confirmar
                                </Text>

                            </TouchableOpacity>

                        </View>

                    </ScrollView>

                </View>

            </View>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    /* ======================================================
       Pantalla y Popup
       ====================================================== */

    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.45)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 18,
    },

    popup: {
        width: '90%',
        maxWidth: 430,
        maxHeight: '88%',
        backgroundColor: '#FFF8FC',
        borderRadius: 30,
        padding: 20,
        elevation: 10,
    },

    /* ======================================================
       Encabezado
       ====================================================== */

    header: {
        alignItems: 'contain',
        marginBottom: 18,
    },

    logo: {
        width: 135,
        height: 135,
        resizeMode: 'center',
        marginBottom: 10,
    },

    title: {
        fontSize: 29,
        fontWeight: 'bold',
        color: Colors.primary,
        textAlign: 'center',
        marginBottom: 10,
    },

    /* ======================================================
       Producto
       ====================================================== */

    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    productImage: {
        width: 95,
        height: 95,
        borderRadius: 16,
        resizeMode: 'cover',
    },

    productInfo: {
        flex: 1,
        marginLeft: 15,
    },

    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary,
    },

    productPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text,
        marginTop: 4,
    },

    note: {
        marginTop: 6,
        fontSize: 12,
        lineHeight: 17,
        color: Colors.text,
    },

    /* ======================================================
       Formulario
       ====================================================== */

    label: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.primary,
        marginBottom: 6,
        marginTop: 10,
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5D9EA',
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 11,
        fontSize: 14,
        color: Colors.text,
        marginBottom: 10,
    },

    /* ======================================================
       Cantidad y Subtotal
       ====================================================== */

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,
    },

    labelRow: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.primary,
    },

    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    counterButton: {
        width: 32,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.primary,
    },

    quantity: {
        width: 30,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text,
    },

    subtotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary,
    },

    /* ======================================================
       Botones
       ====================================================== */

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28,
    },

    cancelButton: {
        width: '47%',
        height: 48,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: Colors.primary,
        backgroundColor: '#F8F3FA',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cancelButtonText: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.primary,
    },

    confirmButton: {
        width: '47%',
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.button,
        justifyContent: 'center',
        alignItems: 'center',
    },

    confirmButtonText: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.buttonText,
    },

});