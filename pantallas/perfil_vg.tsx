import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
  } from 'react-native';


const Perfil_VG = ()=>{
    return (
        <SafeAreaView > 
          <ScrollView 
          contentContainerStyle={styles.svContenedor}
          contentInsetAdjustmentBehavior="automatic">
            
          <Image 
          style={styles.fotoPerfil}
            source={require('../imagenes/Perfil.jpg')} 
            />
            <Text style={styles.encabezado}>Angela María Méndez Rivera</Text>
            <View style={styles.seccion}>
            <Text style={styles.seccionHeder}>Fecha de nacimiento:</Text>  
            <Text style={styles.seccionContent}>10 de abril del 2003</Text> 
              </View>
              
            <Text style={styles.seccionH}>Pasatiempos:</Text>  
            <Text style={styles.seccionContent}>Amo cocinar y probar recetas 
            nuevas, disfruto diversos géneros musicales,tambien me encanta 
            bailar, salir a caminaf al aire libre ya que me relaja,pero lo
             mas importante para mi es pasar tiempo de calidad con las personas
              cercanas. </Text> 
            <Text style={styles.seccionH}>Otros:</Text>  
            <Text style={styles.seccionContent}>
              Soy de Ajuterique, estudio en el campus UJCV Comayagua y
              espero aprender mucho de estas clase y asi poderlas poner 
              en practica,</Text> 
             
               
          </ScrollView>
        </SafeAreaView>
      );
    
}
    const styles = StyleSheet.create({
      encabezado: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e2d69',
      },
    
      svContenedor: {
        alignItems: 'center',
      },
      fotoPerfil:{
        width: 200,
        height: 220,
      },
      seccion:{
        flexDirection: 'row',
        marginTop: 10,
      },
      seccionHeder:{
        fontSize: 18,
        fontWeight: 'bold',
      },
      seccionH:{
        fontSize: 18,
        marginTop: 15,
        fontWeight: 'bold',
      },
      seccionContent:{
        fontSize: 17,
        marginStart: 5,
      }
      
    });

 export default Perfil_VG;
