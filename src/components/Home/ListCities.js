import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './style'

export default function ListCities() {
    return(
        <View style={styles.cardCity}>
            <View style={styles.header}>
                <Text style={styles.cityName}>Lages</Text>
                <View style={{marginLeft: 'auto'}}>
                    <Icon name="closecircle" size={20} color="white"></Icon>
                </View>
            </View>
            <View style={styles.temperature}>
                <Text style={styles.temperatureText}>22</Text>
                <Text style={styles.temperatureCelcius}>°C</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.cityName}>Nuvens dispersas</Text>
                <View style={{marginLeft: 'auto'}}>
                    <Icon name="closecircle" size={20} color="white"></Icon>
                </View>
            </View>
        </View>
    )
}