import {Text, View, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './style'

export default function ListCities(props) {
    return(
        <FlatList
            data={props.cities}
            renderItem={({item}) =>{
                return (
                    <View style={styles.cardCity}> 
                        <View style={styles.header}>
                            <Text style={styles.cityName}>{item.data.name}</Text>
                            <View style={{marginLeft: 'auto'}}>
                                <Icon name="closecircle" size={20} color="white"></Icon>
                            </View>
                        </View>
                        <View style={styles.temperature}>
                            <Text style={styles.temperatureText}>{item.data.main.temp}</Text>
                            <Text style={styles.temperatureCelcius}>°C</Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.description}>{item.data.weather[0].description}</Text>
                            <View style={{marginLeft: 'auto'}}>
                                <Image style={styles.tinyLogo} source={{uri: `http://openweathermap.org/img/w/${item.data.weather[0].icon}.png`}}></Image>
                            </View>
                        </View>
                    </View> 
                )
            }}
            keyExtractor={(item)=>{item.data.id}}
        ></FlatList>
    )
}