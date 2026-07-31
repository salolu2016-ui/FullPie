/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : SuccessModal.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : Julio 2026
 * Descripción :
 * Popup personalizado que confirma la recepción del pedido.
 * ==========================================================
 */

import React from 'react';

import {
    Modal,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';

import Colors from '../../theme/colors';

export default function SuccessModal({

    visible,
    onClose,
    nombre,
    pie,
    cantidad,
    subtotal,

}) {

    return (

        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >

            <View style={styles.overlay}>

                <View style={styles.popup}>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContent}
                    >

                    <Image
                        source={require('../../assets/images/logo_fullpie.png')}
                        style={styles.logo}
                    />

                    <Text style={styles.title}>
                        🥧 Pedido recibido
                    </Text>

                    <Text style={styles.message}>
                        ¡Gracias por tu compra!
                    </Text>

                    <Text style={styles.description}>
                        Hemos recibido tu pedido correctamente.
                    </Text>

          <View style={styles.summaryCard}>

            <Text style={styles.summaryTitle}>
                📋 Resumen del pedido
            </Text>

            <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Cliente:</Text>
                <Text style={styles.summaryValue}>{nombre}</Text>
            </View>

            <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Producto:</Text>
                <Text style={styles.summaryValue}>{pie}</Text>
            </View>

            <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Cantidad:</Text>
                <Text style={styles.summaryValue}>{cantidad}</Text>
            </View>

            <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Total:</Text>
                <Text style={styles.summaryTotal}>${subtotal}</Text>
            </View>

        </View>

                    <Text style={styles.footer}>
                        🥧 Nuestro chef ya está preparando tu pedido con mucho cariño.
                    </Text>

                    <Text style={styles.footer}>
                        Muy pronto nos comunicaremos contigo para coordinar la entrega.
                    </Text>

                    <Text style={styles.footerEnd}>
                        ¡Será un placer llevar un delicioso pie hasta ti! 💜
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={onClose}
                    >

                        <Text style={styles.buttonText}>
                            Cerrar
                        </Text>

                    </TouchableOpacity>

                    </ScrollView>
                </View>

            </View>

        </Modal>

    );

}

const styles = StyleSheet.create({

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.45)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    popup: {
        width: '90%',
        maxWidth: 430,
        maxHeight: '85%',
        backgroundColor: '#FFF8FC',
        borderRadius: 30,
        padding: 22,
    },

        logo: {
        width: 95,
        height: 95,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 12,
    },

        title: {
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.primary,
            textAlign: 'center',
            marginBottom: 12,
        },

        message: {
            fontSize: 18,
            fontWeight: 'bold',
            color: Colors.primary,
            textAlign: 'center',
            marginBottom: 10,
        },

        description: {
            fontSize: 15,
            color: Colors.text,
            textAlign: 'center',
            //marginBottom: 1,
        },

        separator: {
            borderBottomWidth: 1,
            borderBottomColor: '#E8DCEB',
            marginVertical: 12,
        },

        label: {
            color: Colors.primary,
            fontWeight: 'bold',
        },

        value: {
            color: Colors.text,
            fontWeight: '400',
        },

        total: {
            color: Colors.primary,
            fontWeight: 'bold',
            fontSize: 16,
        },

        footer: {
            fontSize: 14,
            color: Colors.text,
            textAlign: 'center',
            lineHeight: 22,
            marginTop: 10,
        },

        footerEnd: {
            fontSize: 15,
            fontWeight: '600',
            color: Colors.primary,
            textAlign: 'center',
            marginTop: 14,
        },

        button: {
            marginTop: 24,
            backgroundColor: Colors.button,
            borderRadius: 24,
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
        },

        buttonText: {
            color: Colors.buttonText,
            fontSize: 15,
            fontWeight: '700',
        },
        scrollContent: {
            paddingBottom: 10,
        },

        info: {
            fontSize: 15,
            marginBottom: 10,
        },

        summaryCard: {
            backgroundColor: '#F8F3FA',
            borderRadius: 18,
            padding: 18,
            marginVertical: 16,
            borderWidth: 1,
            borderColor: '#E7D8ED',
        },

        summaryTitle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: Colors.primary,
            marginBottom: 14,
            textAlign: 'center',
        },

    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },

    summaryLabel: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.primary,
    },

    summaryValue: {
        flex: 1,
        fontSize: 15,
        color: Colors.text,
        textAlign: 'right',
        marginLeft: 12,
    },

    summaryTotal: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.primary,
        textAlign: 'right',
        marginLeft: 12,
    },

});