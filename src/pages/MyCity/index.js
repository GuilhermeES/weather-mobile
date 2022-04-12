import {View, Text, Image, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import {api, key} from '../../service/config'
import axios from 'axios'
import styles from './style'

export default function Start() {
    const [myCity, setMyCits] = useState([])

    async function getData(){
        const getCity = await axios.get(`${api}weather?q=lages&appid=${key}&lang=pt_br&units=metric`)
        setMyCits(getCity.data)        
    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        console.log(myCity)
    }, [myCity]);

  
    return(
        <View style={styles.container}>
        <View style={styles.header}>
              <Image style={styles.tinyLogo} source={{uri: `http://openweathermap.org/img/w/04n.png`}}></Image>
              <View style={styles.cityInfo}>
                  <Text style={styles.city}>{myCity.name},</Text>
                  <Text style={styles.desc}>desc</Text>
              </View>
              <View style={styles.temperature}>
              
              {myCity && myCity.main &&   <Text style={styles.temperatureTextHeader}>{myCity.main.temp}</Text> }
         
                  <Text style={styles.temperatureCelcius}>°C</Text>
              </View>
        </View>
        <ScrollView  style={styles.content}>
              <View style={styles.minMax}>
                <View style={styles.cardInfo}>
                    <Text style={{textTransform: 'uppercase', color: '#ffffff'}}>
                        Temp min
                    </Text>
                    <View style={styles.temperature}>
                        <Text style={styles.temperatureText}>22</Text>
                        <Text style={styles.temperatureCelcius}>°C</Text>
                    </View>
                    <Text style={{textTransform: 'uppercase', color: '#ffffff', fontSize:18}}>
                        Min
                    </Text>
                </View>
                  <View style={styles.cardInfo}>
                      <Text style={{textTransform: 'uppercase', color: '#ffffff'}}>
                          Temp max
                      </Text>
                      <View style={styles.temperature}>
                          <Text style={styles.temperatureText}>22</Text>
                          <Text style={styles.temperatureCelcius}>°C</Text>
                      </View>
                      <Text style={{textTransform: 'uppercase', color: '#ffffff', fontSize:18}}>
                          max
                      </Text>
                  </View>
              </View> 
              <View style={styles.anotherInfo}>
                  <View style={styles.cardInfoCord}>
                      <Text style={{textTransform: 'uppercase', color: '#ffffff', marginBottom:15}}>
                          Coordenadas
                      </Text>
                      <View style={styles.coord}>
                          <Text style={{textTransform: 'uppercase', color: '#ffffff'}}>Latitude</Text>
                          <Text style={styles.temperatureText}>55.77</Text>

                          <Text style={{textTransform: 'uppercase', color: '#ffffff'}}>Longitude</Text>
                          <Text style={styles.temperatureText}>55.77</Text>
                      </View>
                  </View>
                  <View style={styles.anotherInfoItens}>
                      <View style={styles.cardInfoIten}>
                          <Text style={{textTransform: 'uppercase', color: '#ffffff', marginBottom:15}}>
                              Sensação de
                          </Text>
                          <View style={styles.temperature}>
                              <Text style={styles.temperatureText}>22</Text>
                              <Text style={styles.temperatureCelcius}>°C</Text>
                          </View>
                      </View>
                      <View style={styles.cardInfoIten}>
                          <Text style={{textTransform: 'uppercase', color: '#ffffff', marginBottom:15}}>
                              Pressão
                          </Text>
                          <View style={styles.temperature}>
                              <Text style={styles.temperatureText}>1000 hPa</Text>
                          </View>
                      </View>
                  </View>
              </View>
        </ScrollView >
      </View>
       
    )
}