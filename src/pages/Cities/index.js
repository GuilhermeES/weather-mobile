import {View, TextInput,  TouchableOpacity, Text, Alert, Keyboard } from 'react-native';
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
        if(city == ''){
            Alert.alert('Error', 'Escreva um nome válido',[
                {text:'OK'}
            ])
        }
        else{
            axios.get(`${api}weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
            .then(response => {
                if(response.data.cod == 200){
                    const repeatCity = cities.find(item => item.id == response.data.id)
                    if(!repeatCity){
                        setCities((arr) => [response.data, ...arr])
                        setCity('')
                        Keyboard.dismiss()   
                    }
                    else{
                        Alert.alert('Error', 'Cidade já cadastrada',[
                            {text:'OK'}
                        ])
                        Keyboard.dismiss()   
                    }
                }
            })
            .catch( () => {
                Alert.alert('Error', 'Cidade não encontrada',[
                    {text:'OK'}
                ])
                Keyboard.dismiss()   
            })
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <Icon name="search1" size={15} color="black" style={styles.search}></Icon>
                <TextInput placeholder='Adicionar cidade...' keyboardType='default' style={styles.inputSearch} onChangeText={setCity} value={city}></TextInput>
                <TouchableOpacity
                    style={[styles.btnAdd, styles.shadowProp]}
                    title="Adicionar"
                    onPress={() => addCity()}
                >
                    <Text style={styles.textBtnAdd}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View >
            {cities.length == 0
                ?  <Text style={styles.title}>Nenhuma cidade cadastrada...</Text>
                :  <Text style={styles.title}>Minhas cidades: </Text>
            }
            <ListCities cities={cities} />
        </View>
    )
}
