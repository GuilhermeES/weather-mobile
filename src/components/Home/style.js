import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardCity: {
        backgroundColor: '#449BE4',
        padding: 20,
        borderRadius: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cityName: {
        color: '#ffffff',
        fontSize: 20
    },
    temperature: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },  
    temperatureText: {
        fontSize: 50,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    temperatureCelcius: {
        fontSize: 20,
        color: '#ffffff'
    }
})

export default styles