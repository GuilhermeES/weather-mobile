import {View, Button, TextInput,  TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import ListCities from '../../components/Home/ListCities';
import styles from './style'

export default function Cities({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <Icon name="search1" size={15} color="black" style={styles.search}></Icon>
                <TextInput placeholder='Adicionar cidade...' keyboardType='numeric' style={styles.inputSearch}></TextInput>
                <TouchableOpacity
                    style={styles.btnAdd}
                    title="Va para Start"
                    onPress={() => navigation.navigate('Start')}
                >
                <Text style={styles.textBtnAdd}>
                    Adicionar
                </Text>
                </TouchableOpacity>
            </View >
            <Text style={styles.title}>Minhas cidades: </Text>
            <ListCities/>
            <Button
                title="Va para Start"
                onPress={() => navigation.navigate('Start')}
            />
        </View>
    )
}