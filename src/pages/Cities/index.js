import {View, TextInput,  TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ListCities from '../../components/Home/ListCities';
import { useState } from 'react';
import axios from 'axios';
import {api, key} from '../../service/config'
import styles from './style';

export default function Cities() {
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState('');

    function addCity() {
        axios.get(`${api}weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
        .then(data => {
            setCities((arr) => [data, ...arr])
            setCity('')
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <Icon name="search1" size={15} color="black" style={styles.search}></Icon>
                <TextInput placeholder='Adicionar cidade...' keyboardType='numeric' style={styles.inputSearch} onChangeText={setCity} value={city}></TextInput>
                <TouchableOpacity
                    style={styles.btnAdd}
                    title="Adicionar"
                    onPress={() => addCity()}
                >
                    <Text style={styles.textBtnAdd}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View >
            <Text style={styles.title}>Minhas cidades: </Text>
            <ListCities cities={cities} />
        </View>
    )
}
