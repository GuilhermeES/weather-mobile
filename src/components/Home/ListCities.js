import {Text, View, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './style'

export default function ListCities(props) {

    function deleteCity(id){
        const newCities = props.cities.filter(city => city.id !== id);
        props.cities(newCities)
    }

    return(
        <FlatList
            data={props.cities}
            renderItem={({item}) =>{
                return (
                    <View style={styles.cardCity}> 
                        <View style={styles.header}>
                            <Text style={styles.cityName}>{item.name}</Text>
                            <View style={{marginLeft: 'auto'}}>
                                <Icon name="closecircle" size={20} color="white" onPress={() => deleteCity(item.id)}></Icon>
                            </View>
                        </View>
                        <View style={styles.temperature}>
                            <Text style={styles.temperatureText}>{item.main.temp}</Text>
                            <Text style={styles.temperatureCelcius}>°C</Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.description}>{item.weather[0].description}</Text>
                            <View style={{marginLeft: 'auto'}}>
                                <Image style={styles.tinyLogo} source={{uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`}}></Image>
                            </View>
                        </View>
                    </View> 
                )
            }}
            keyExtractor={(item)=>{item.id}}
        ></FlatList>
    )
}