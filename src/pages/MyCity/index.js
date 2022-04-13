import {View, Text, Image, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import {api, key} from '../../service/config';
import axios from 'axios';
import styles from './style';
import * as Location from 'expo-location';

export default function Start() {
    const [myCity, setMyCits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        async function getLocation(){
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão negada :(');
            }
            let locationCords = await Location.getCurrentPositionAsync({});
            getCity(locationCords.coords.latitude, locationCords.coords.longitude);
        }

        async function getCity(lati,long){
            const getCity = await axios.get(`${api}weather?lat=${lati}&lon=${long}&appid=${key}&lang=pt_br&units=metric`);
            setMyCits(getCity.data);
            setLoading(false);
        }

        getLocation();
    }, []);


    return(
        <View style={styles.container}>
            {loading &&
                <View style={styles.loader}>
                    {!errorMsg
                      ?  <Image source={require('../../../assets/loader.gif')} style={{height:120, width:120}} /> 
                      :  <Text style={styles.errorMsg}>{errorMsg}</Text> 
                    }   
                </View>
            }
            <View style={styles.header}>
                <Image style={styles.tinyLogo} source={{uri: `http://openweathermap.org/img/w/04n.png`}}></Image>
                <View style={styles.cityInfo}>
                    <Text style={styles.city}>{myCity.name},</Text>
                    {myCity && myCity.weather &&
                        <Text style={styles.desc}>{myCity.weather[0].description}</Text>
                    }
                </View>
                <View style={styles.temperature}>
                    {myCity && myCity.main &&
                        <Text style={styles.temperatureTextHeader}>{myCity.main.temp.toFixed()}</Text> 
                    }
                    <Text style={styles.temperatureCelcius}>°C</Text>
                </View>
            </View>
            <ScrollView  style={styles.content}>
                <View style={styles.contentItens}>
                    <View style={styles.minMax}>
                        <View style={[styles.cardInfo, styles.spaceRight]}>
                            <Text style={{textTransform: 'uppercase', color: '#ffffff'}}>
                                Temp min
                            </Text>
                            <View style={styles.temperature}>
                            {myCity && myCity.main &&
                                <Text style={styles.temperatureText}>{myCity.main.temp_min.toFixed()}</Text>
                            }
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
                            {myCity && myCity.main &&
                                <Text style={styles.temperatureText}>{myCity.main.temp_max.toFixed()}</Text>
                            }
                                <Text style={styles.temperatureCelcius}>°C</Text>
                            </View>
                            <Text style={{textTransform: 'uppercase', color: '#ffffff', fontSize:18}}>
                                max
                            </Text>
                        </View>
                    </View> 
                    <View style={styles.anotherInfo}>
                        <View style={[styles.cardInfoCord, styles.spaceRight]}>
                            <Text style={{textTransform: 'uppercase', color: '#ffffff', marginBottom:15}}>
                                Coordenadas
                            </Text>
                            <View style={styles.coord}>
                                <Text style={{textTransform: 'uppercase', color: '#ffffff'}}>Latitude</Text>
                                {myCity && myCity.coord &&
                                    <Text style={styles.temperatureText}>{myCity.coord.lat}</Text>
                                }

                                <Text style={{textTransform: 'uppercase', color: '#ffffff'}}>Longitude</Text>
                                {myCity && myCity.coord &&
                                <Text style={styles.temperatureText}>{myCity.coord.lon}</Text>
                                }
                            </View>
                        </View>
                        <View style={styles.anotherInfoItens}>
                            <View style={styles.cardInfoIten}>
                                <Text style={{textTransform: 'uppercase', color: '#ffffff', marginBottom:15}}>
                                    Sensação de
                                </Text>
                                <View style={styles.temperature}>
                                {myCity && myCity.main &&
                                    <Text style={styles.temperatureText}>{myCity.main.feels_like.toFixed()}</Text>
                                }
                                    <Text style={styles.temperatureCelcius}>°C</Text>
                                </View>
                            </View>
                            <View style={styles.cardInfoIten}>
                                <Text style={{textTransform: 'uppercase', color: '#ffffff', marginBottom:15}}>
                                    Pressão
                                </Text>
                                <View style={styles.temperature}>
                                {myCity && myCity.main &&
                                    <Text style={styles.temperatureText}>{myCity.main.pressure}</Text>
                                }
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View>
    )
}