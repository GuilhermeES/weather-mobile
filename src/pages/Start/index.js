import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './style'

export default function Start({ navigation }) {
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/start.png')} style={{height:350, width:350}} />
            <Text style={styles.title}>
                Quer saber a temperatura? 
                clique no botão abaixo
            </Text>
            <TouchableOpacity
                style={styles.btnStart}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.textStart}>Começar</Text>
            </TouchableOpacity>
            <Text style={styles.version}>v1.0</Text>
        </View>
    )
}