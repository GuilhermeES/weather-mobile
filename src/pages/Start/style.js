import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20
    },
    title:{
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10
        
    },  
    btnStart: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        backgroundColor: "#449BE4",
        padding: 15,
        marginTop: 60
    },
    textStart: {
        color: '#ffffff',
        fontSize: 20,
    },
    version: {
        fontSize: 15,
        position: 'absolute',
        bottom: 0,
        paddingBottom: 20
    }
})

export default styles