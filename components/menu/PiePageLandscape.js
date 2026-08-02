import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Colors from '../../theme/colors';

export default function PiePageLandscape({ pie }) {

  const navigation = useNavigation();

return (

 <ScrollView
    horizontal={false}
    contentContainerStyle={styles.scrollContent}
    showsVerticalScrollIndicator={false}
    style={{ width: '100%' }}
>

    <View style={styles.container}>

      {/* Card Foto */}
      <View style={styles.photoCard}>

        <Image
          source={pie.imagen}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.title}>
          {pie.nombre}
        </Text>

      </View>

      {/* Card Precio */}
      <View style={styles.priceCard}>

        <Text style={styles.priceLabel}>
          Precio
        </Text>

        <Text style={styles.price}>
          {pie.precio}
        </Text>

        <TouchableOpacity
          style={styles.buyButton}
          onPress={() =>
            navigation.navigate('Purchase', { pie })
          }
        >
          <Text style={styles.buyButtonText}>
            Comprar
          </Text>
        </TouchableOpacity>

      </View>

      {/* Card Información */}
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

  </ScrollView>

);

}

const styles = StyleSheet.create({

  scrollContent: {
    paddingHorizontal: -20,
    paddingVertical: 8,
  },

container: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  paddingHorizontal: 15,
  paddingLeft: '12%',
  paddingRight: 80,
},

photoCard: {
  width: 190,
  height: 150,
  backgroundColor: 'rgba(248,248,248,0.92)',
  borderRadius: 16,
  padding: 8,
  alignItems: 'center',
  elevation: 4,
},

image: {
  width: '100%',
  height: 105,
  borderRadius: 12,
  marginTop:5,
},

  title: {
  marginTop: 6,
  fontSize: 14,
  fontWeight: 'bold',
  color: Colors.primary,
  textAlign: 'center',
},

priceCard: {    
  width: 175,
  height: 140,
  backgroundColor: 'rgba(248,248,248,0.92)',
  borderRadius: 16,
  padding: 8,
  alignItems: 'center',
  elevation: 4,
  marginLeft: 20,
  marginTop:10,
},

  priceLabel: {
  fontSize: 20,
  fontWeight: 'bold',
  color: Colors.primary,
},

  price: {
  marginVertical: 8,
  fontSize: 18,
  fontWeight: 'bold',
  color: Colors.primary,
  
},

  buyButton: {
  width: '100%',
  backgroundColor: Colors.button,
  borderRadius: 10,
  paddingVertical: 6,
  alignItems: 'center',
},

 buyButtonText: {
  color: Colors.buttonText,
  fontWeight: 'bold',
  fontSize: 13,
},

infoCard: {
  width: 360,
  marginLeft: 12,
  backgroundColor: 'rgba(255,248,255,0.92)',
  borderRadius: 16,
  padding: 10,
  elevation: 4,
},

  sectionTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: Colors.primary,
  marginBottom: 6,
},

ingredient: {
  fontSize: 12,
  marginBottom: 3,
  color: Colors.text,
},

 description: {
  marginTop: 5,
  fontSize: 10,
  lineHeight: 17,
  color: Colors.text,
  flexShrink: 1,
  width: '85%',
},

});