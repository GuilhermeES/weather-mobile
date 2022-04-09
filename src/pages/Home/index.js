import {View, Text, Button} from 'react-native';

export default function Home({ navigation }) {
    return(
        <View>
            <Text>Home</Text>
            <Button
                title="Va para Start"
                onPress={() => navigation.navigate('Start')}
            />
        </View>
    )
}