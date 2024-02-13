// styles.js
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import React, { Component } from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

<ScrollView horizontal={true} 
          style={{
            marginTop:10,
            marginLeft:10,
            marginBottom:80,
            marginVertical:10,
            borderTopStartRadius:500
          }}>
           <View
            style ={{
            width:110,
            heigth:100,
            marginTop:5,
            marginLeft:10,
            borderRadius:40,
            backgroundColor:"gray",
            opacity:0.8
            }}>
        <Image  source={require('./Imagenes/assets/images/heavyrain.png')}
          style ={{
            width:50,
            height:50,
            marginTop:5,
            marginLeft:30
          }}></Image>
          <Text
          style ={{
          color:"white",
            fontSize:20,
            marginTop:10,
            marginLeft:20
        }}>Tuesday</Text>
        <Text style={{
          color:"white",
          fontSize:20,
          marginTop:8,
          marginLeft:35  
        }}>13°C</Text>     
           </View>

        <View
            style ={{
            borderWidth:0,
            width:100,
            heigth:10,
            marginTop:-110,
            marginLeft:20,
            borderRadius:40,
            backgroundColor:"gray",
            opacity:0.8
            }}>
        <Image  source={require('./Imagenes/assets/images/heavyrain.png')}
          style ={{
            width:50,
            height:50,
            marginTop:120,
            marginLeft:25,
          }}></Image>
          <Text
          style ={{
          color:"white",
          fontSize:20,
          marginTop: 10,
          marginLeft:25
        }}>Friday</Text>
        <Text style={{
          color:"white",
          fontSize: 20,
          marginTop: 8,
          marginLeft:30 
        }}>13°C</Text> 
          </View>

         <View
            style ={{
            borderWidth:0,
            width:110,
            heigth:20,
            marginTop:-115,
            marginLeft:20,
            borderRadius:40,
            backgroundColor:"gray",
            opacity:0.8
            }}>
        <Image  source={require('./Imagenes/assets/images/heavyrain.png')}
          style ={{
            width:50,
            height:50,
            marginTop:125,
            marginLeft:30
          }}></Image>
          <Text
          style ={{
          color:"white",
            fontSize:20,
            marginTop: 10,
            marginLeft: 20
        }}>Saturday</Text>
        <Text style={{
          color:"white",
          fontSize: 20,
          marginTop: 8,
          marginLeft: 35 
        }} >13°C</Text>         
        </View>
        
        <View
            style ={{
            borderWidth:0,
            width:110,
            heigth:20,
            marginTop:-115,
            marginLeft:25,
            borderRadius:40,
            backgroundColor:"gray",
            opacity:0.8
            }}>
        <Image  source={require('./Imagenes/assets/images/heavyrain.png')}
          style ={{
            width:50,
            height:50,
            marginTop:125,
            marginLeft:30
          }}></Image>
          <Text
          style ={{
          color:"white",
            fontSize:20,
            marginTop: 10,
            marginLeft: 20
        }}>Saturday</Text>
        <Text style={{
          color:"white",
          fontSize: 20,
          marginTop: 8,
          marginLeft: 35 
        }} >13°C</Text>         
          </View>
        
         <View
            style ={{
            borderWidth:0,
            width:110,
            heigth:20,
            marginTop:-115,
            marginLeft:25,
            borderRadius:40,
            backgroundColor:"gray",
            opacity:0.8,
            marginRight:15
            }}>
        <Image  source={require('./Imagenes/assets/images/heavyrain.png')}
          style ={{
            width:50,
            height:50,
            marginTop:125,
            marginLeft:30
          }}></Image>
          <Text
          style ={{
          color:"white",
            fontSize:20,
            marginTop: 10,
            marginLeft:20
        }}>{this.state.DaysOfWeek}</Text>
        <Text style={{
          color:"white",
          fontSize: 20,
          marginTop: 8,
          marginLeft:30 
        }}>{this.state.temperatura}</Text>         
          </View>
          </ScrollView>


export default myStyles;