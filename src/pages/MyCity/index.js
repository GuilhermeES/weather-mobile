import {View, Text, TouchableOpacity} from 'react-native';

export default function Start({navigation}) {
    return(
        <View >
            <TouchableOpacity
                onPress={() => navigation.navigate('Adicionar cidade')}
            >
                <Text>
                    Minhas cidades
                </Text>
            </TouchableOpacity>
        </View>
    )
}