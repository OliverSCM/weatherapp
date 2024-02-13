import React, { Component } from 'react';
import {TextInput, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icono from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from 'react-native';
import Axios from 'axios';

export default class Wapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //variables
        barraB:true,
        isVisible:false,
        country:"Mexico",
        region:"Jalisco",
        name:"Guadalajara",
        textoTemperatura:"Partly cloudy",
        temperatura:"57",
        imagenTemperaura:"",
        viento:"23",
        lluvia:"95",
        amanecer:"6:00",
        forecastData: [],
        ciudad:"",
        //DIAS DE LA SEMANA//
        imagen1:"",
        fecha1: "2001-05-05",
        temp1:"55",

        imagen2:"",
        fecha2: "2001-05-05",
        temp2:"55", 
         
        imagen3:"",
        fecha3: "2001-05-05",
        temp3:"55",

        imagen4:"",
        fecha4: "2001-05-05",
        temp4:"55",
        
        imagen5:"",
        fecha5: "2001-05-05",
        temp5:"55",
    };
  }
  
  render() {
    const busca = () => {
      Axios.get('http://api.weatherapi.com/v1/forecast.json?key=5c6638b8371b4bc5aa2233058243101&q='+this.state.ciudad+'&days=5&lang=es')
        .then(response => {
          // Verificar si recibimos los datos correctamente
          console.log("Datos de la API:", response.data);
    
          // Actualizar el estado con los datos actuales
          const currentDayData = response.data.current;
          const currentLocation = response.data.location;
          const forecastDaysData = response.data.forecast.forecastday;
    
          const newState = {
            temperatura: currentDayData.temp_c,
            imagenTemp: currentDayData.condition.icon,
            textoTemperatura: currentDayData.condition.text,
            viento: currentDayData.wind_mph,
            lluvia: currentDayData.precip_mm,
            country:currentLocation.country,
            name:currentLocation.name,
            region:currentLocation.region,
            amanecer: forecastDaysData[0].astro.sunrise,

          };
    
          // Actualizar el estado con los datos de cada día siguiente
          if (forecastDaysData.length > 1) {
            // Día 1
            newState.fecha1 = forecastDaysData[1].date;
            newState.temp1 = forecastDaysData[1].day.maxtemp_c;
            newState.imagen1 = forecastDaysData[1].day.condition.icon;
    
            // Día 2
            newState.fecha2 = forecastDaysData[2].date;
            newState.temp2 = forecastDaysData[2].day.maxtemp_c;
            newState.imagen2 = forecastDaysData[2].day.condition.icon;
    
            // Día 3
            newState.fecha3 = forecastDaysData[3].date;
            newState.temp3 = forecastDaysData[3].day.maxtemp_c;
            newState.imagen3 = forecastDaysData[3].day.condition.icon;
    
            // Día 4
            newState.fecha4 = forecastDaysData[4].date;
            newState.temp4 = forecastDaysData[4].day.maxtemp_c;
            newState.imagen4 = forecastDaysData[4].day.condition.icon;
          }
          //Dia 5
          if (forecastDaysData.length > 5) {
            newState.fecha5 = forecastDaysData[5].date;
            newState.temp5 = forecastDaysData[5].day.maxtemp_c;
            newState.imagen5 = forecastDaysData[5].day.condition.icon;
          }
           else {
            console.log("No hay suficientes datos disponibles para los días siguientes.");
          }
    
          // Actualizar el estado con los datos obtenidos
          this.setState(newState);
        })
        .catch(error => {
          // Manejo de errores
          console.log("Error al obtener datos:", error);
        });
    }
    
    
          
    return (
      <View>
        <ImageBackground 
            source={require('./Imagenes/assets/images/bg.png')}
            style={{height:800}}
            blurRadius={40}>

      <View style ={{
            borderWidth:2,
            borderColor:"red",
            width:300,
            heigth:50,
            marginTop:10,
            marginLeft:40,
            borderRadius:40,
            backgroundColor:this.state.barraB?"gray":"transparent",
            opacity:0.6  
            }}>
        <TextInput 
            placeholder="Busca Ciudad"
            
            onChangeText={ciudad => this.setState({ciudad})}
            ></TextInput>
        </View>
        <TouchableOpacity onPress={busca}>

    <View style={{
        borderWidht:1,
        borderColor:"red",
        width:40,
        height:40,
        borderRadius:150,
        backgroundColor:"gray",
        opacity:0.8,
        marginTop:-40,
        marginLeft:300,
        }}><Image source={require("./Imagenes/assets/icons/magnify.png")}
        style={{
          color: "white",
          width: 30,
          height: 30,
          marginTop: 8,
          marginLeft:8
        }}></Image>
        </View>
    
    </TouchableOpacity>
    <View>
      <Text
      style={{
        fontSize:20,
        color: "white",
        marginTop:50,
        marginLeft:100 
      }}>{this.state.country},</Text>
      <Text
      style={{
        fontSize:20,
        color: "gray",
        marginTop:-25,
        marginLeft:180
      }}>{this.state.name},{this.state.region}</Text>
        <Image source={this.state.imagenTemp===""?require('./Imagenes/assets/images/partlycloudy.png'):{uri:'http:'+this.state.imagenTemp}}
          style ={{
            width:150,
            height:150,
            marginTop:50,
            marginLeft:130
          }}></Image>
        <Text style={{
            color:"white",
            fontSize:20,
            textAlign: "center",
            marginTop: 30,
            marginTop: -40
        }} >{this.state.temperatura}°C</Text>
          </View>
          <View>
          <Text style ={{
            fontSize:25,
            color:"white",
            fontWeiht:10,
            marginLeft:150,
            opacity: 0.5
            }}>{this.state.textoTemperatura}</Text>
          </View>               
        
        <View>
         <Image source={require("./Imagenes/assets/icons/sun.png")}
          style={{
            width:30,
            height:30,
            marginTop:30,
            marginLeft:270
          }}></Image>
          <Text style={{
          color:"white",
          fontSize:15,
          fontWeiht:500,
          marginTop:-25,
          marginLeft:310
          }}>{this.state.amanecer}</Text>
        </View>
          
        <View>
      <Image source={require("./Imagenes/assets/icons/drop.png")}    
        style ={{
          width:30,
          height:30,
          marginTop:-30,
          marginLeft:150
        }}></Image>      
        <Text style={{
          color:"white",
          fontWeiht: 800,
          marginTop: -20,
          marginLeft: 190 
        }} >{this.state.lluvia}%</Text>
        </View>

          <View>
          <Image source={require("./Imagenes/assets/icons/wind.png")}
          style={{
            width: 30,
            height: 30,
            marginTop: -25,
            marginLeft: 30
          }}></Image>
          <Text style={{
            color:"white",
            frontSize:40,
            frontWeiht:800,
            marginTop: -30,
            marginLeft: 70
        }}>{this.state.viento}km</Text>
          </View>

          <View>
          <Image source={require("./Imagenes/assets/icons/calendar-month.png")}
          style={{
            color: "white",
            width: 30,
            height: 30,
            marginTop: 20,
            marginLeft: 30
          }}></Image>
          <Text style={{
            color:"white",
            frontSize:40,
            frontWeiht:800,
            marginTop: -31,
            marginLeft: 60
        }}>Daily Forecast</Text>
          </View>
          
          <ScrollView horizontal={true} 
          style={{
            marginTop:10,
            marginBottom:100,
            marginVertical:10,
         }}><View
            style ={{
              borderWidth:0,
              width:100,
              heigth:10,
              marginTop:15,
              marginLeft:20,
              borderRadius:40,
              backgroundColor:"gray",
              opacity:0.8
            }}>
        <Image source={this.state.imagen1 === "" ? require('./Imagenes/assets/images/partlycloudy.png') : { uri: 'http:' + this.state.imagen1 }}
  style={{
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20
  }}></Image>

          <Text
          style ={{
          color:"white",
            fontSize:15,
            marginTop:10,
            marginLeft:13
        }}>{this.state.fecha1}</Text>
        <Text style={{
          color:"white",
          fontSize:20,
          marginTop:8,
          marginLeft:20  
        }}>{this.state.temp1}°C</Text>     
           </View>

        <View
            style ={{
            borderWidth:0,
            width:100,
            heigth:10,
            marginTop:10,
            marginLeft:20,
            borderRadius:40,
            backgroundColor:"gray",
            opacity:0.8
            }}>
        <Image source={this.state.imagen2 === "" ? require('./Imagenes/assets/images/partlycloudy.png') : { uri: 'http:' + this.state.imagen2}}
  style={{
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20
  }}></Image>
          <Text
          style ={{
          color:"white",
          fontSize:15,
          marginTop: 10,
          marginLeft:10
        }}>{this.state.fecha2}</Text>
        <Text style={{
          color:"white",
          fontSize: 20,
          marginTop: 8,
          marginLeft:30 
        }}>{this.state.temp2}°C</Text> 
          </View>

         <View
            style ={{
            borderWidth:0,
            width:110,
            heigth:20,
            marginTop:10,
            marginLeft:20,
            borderRadius:40,
            backgroundColor:"gray",
            opacity:0.8
            }}>
        <Image source={this.state.imagen3 === "" ? require('./Imagenes/assets/images/partlycloudy.png') : { uri: 'http:' + this.state.imagen3 }}
  style={{
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20
  }}></Image>
          <Text
          style ={{
          color:"white",
            fontSize:15,
            marginTop: 10,
            marginLeft: 15
        }}>{this.state.fecha3}</Text>
        <Text style={{
          color:"white",
          fontSize: 20,
          marginTop: 8,
          marginLeft: 35 
        }} >{this.state.temp3}°C</Text>         
        </View>
        
        <View
            style ={{
            borderWidth:0,
            width:110,
            heigth:20,
            marginTop:10,
            marginLeft:25,
            borderRadius:40,
            backgroundColor:"gray",
            opacity:0.8
            }}>
        <Image source={this.state.imagen4 === "" ? require('./Imagenes/assets/images/partlycloudy.png') : { uri: 'http:' + this.state.imagen4 }}
  style={{
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20
  }}></Image>
          <Text
          style ={{
          color:"white",
            fontSize:15,
            marginTop: 10,
            marginLeft:15
        }}>{this.state.fecha4}</Text>
        <Text style={{
          color:"white",
          fontSize: 20,
          marginTop: 8,
          marginLeft: 35 
        }} >{this.state.temp4}°C</Text>         
          </View>
          </ScrollView>
    
    </ImageBackground>
      </View>
    );
  }
}

// declaración de estilos,