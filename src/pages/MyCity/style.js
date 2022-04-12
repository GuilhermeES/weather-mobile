import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection:'column',
        backgroundColor: '#ffffff',
        width: '100%'
    },
    header: {
        backgroundColor: '#449BE4',
        padding: 20,
        alignItems: 'center',
        paddingTop: 50
    },
    city :{
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 35,
        marginRight: 10
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    cityInfo: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    temperature: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },  
    temperatureText: {
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    temperatureTextHeader: {
        fontSize: 50,
        marginBottom: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    temperatureCelcius: {
        fontSize: 20,
        color: '#ffffff'
    },
    desc :{
        color: '#ffffff',
        fontSize: 30,
    },
    content: {
        padding: 20,
        backgroundColor: '#ffffff',
        position: 'relative',
        bottom: 25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginBottom: 65
    },
    minMax: {
        flexDirection: 'row',
        marginBottom: 20,
        flex: '2',
        justifyContent: 'space-between',
      
    },
    cardInfo: {
        backgroundColor: '#449BE4',
        padding: 15,
        borderRadius:30,
        width: '50%',
    },
    cardInfoIten: {
        backgroundColor: '#449BE4',
        padding: 15,
        borderRadius:30,
        width: '100%'
    },
    cardInfoCord: {
        backgroundColor: '#449BE4',
        padding: 15,
        borderRadius:30,
        width: '50%',
        justifyContent: 'center'
    },
    anotherInfo: {
        flexDirection: 'row',
        width: '100%'
    },
    anotherInfoItens:{
        flexDirection: 'column',
        width: '50%'
    }    
    
})

export default styles