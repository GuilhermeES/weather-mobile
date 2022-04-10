import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style'

export default function Start({navigation}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Adicionar cidade')}
            >
                
            </TouchableOpacity>
        </View>
    )
}