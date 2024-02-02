import React, {useState} from "react";
import { Button, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Image,
    StatusBar,
    useColorScheme,
    View,
  } from 'react-native';



const Inicio = ({navigation}) => {

    const handlepress = ()=>{
        navigation.navigate('Perfil_VG');
     };


     
    

    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.contenedor}>
                <Text style={styles.encabezado}>Inicio</Text>
                <Image 
                style={styles.fotoperfilp}
                source={require('../imagenes/MiguelAngel.jpeg')} 
                />
            <Text style={styles.seccionHeaderp}>Miguel Angel</Text>
    
            <View 
            style= {styles.seccionp}>
             <Text style={styles.seccionHeaderp}> Fecha de Nacimiento: </Text>
             <Text style={styles.seccionContentp}> 6 de marzo de 1475 </Text>
             </View>
    
             
             <Text style={styles.seccionmargentopp}> Pasatiempos: </Text>
             <Text style={styles.seccionmargenp}>Arquitecto, pintor y poeta, y sobresaliente en todo esos campos. Pero desde luego su pasión, su vocación, su obsesión era la escultura.</Text>
             
             <Text style={styles.seccionmargentopp}> Otros </Text>
             <Text style={styles.seccionmargenp}>Fue un arquitecto, escultor, pintor y poeta italiano renacentista, considerado uno de los más grandes artistas de la historia tanto por sus esculturas como por sus pinturas y obra arquitectónica.</Text>
    
                <Button 
                    title='Mi perfil'
                    onPress={handlepress}
                />
     
            </ScrollView>
        </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    encabezadop: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#9B59B6',
    },
    
    svContenedorp:{
      alignItems: 'center',
    },
    
    fotoperfilp:{
    width: 200,
    height: 220,
    marginTop: 30,
    },
    
    seccionp: {
      flexDirection: 'row',
      marginTop: 30,
    },
    
    seccionmargentopp: {
      fontSize: 17,
      fontWeight: 'bold',
      marginTop: 29,
    },
    
    seccionHeaderp: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    
    seccionContentp: {
      fontSize: 15,
      marginStart: 1,
    },
    
    seccionmargenp: {
      fontSize: 15,
      marginStart: 20,
      marginEnd: 20,
      
    },
    contenedor:{
            alignItems:'center',
        },

        encabezado:{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
        },

        margen:{
        marginTop: 30,

        },

    });
            

export default Inicio;

