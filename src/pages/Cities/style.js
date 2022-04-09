import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff'
    },
    containerSearch: {
        width: '100%',
        flexDirection: 'row'
    },
    btnAdd: {
        borderRadius: 10,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#449BE4",
    },
    textBtnAdd: {
        color: '#ffffff',
        fontSize: 15
    },
    inputSearch: {
        backgroundColor: '#ededef',
        borderRadius: 10,
        width: '70%',
        height: 40,
        paddingLeft: 40,
        marginRight: 10
    },
    search: {
       position: 'absolute',
       zIndex: 10,
       left: 10,
       top: 11     
    },
    title: {
        fontSize: 20,
        paddingTop: 40,
        paddingBottom: 30
    }
})

export default styles