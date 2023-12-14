import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alingItems: 'center',
        justifyContent: 'center',
    },
    menuTitle: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
      
    },
        image: {
        width: '75%',
        height: '75%',
    },
    gameTitle: {
        fontSize: 29,
        textAlign: 'center',
        color: '#555',
        marginTop: 20,
        marginBottom: 29, 
    

    },
    
    subtitle: {
        fontSize: 30,
        textAlign: 'center',
        color: '#555',
        marginTop: 20,
        marginBottom: 20

    },

    inlineItems: {
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
     
    box: {
        width:  80, //largura
        height: 80, // altura
        backgroundColor: '#800080',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
        alignSelf: 'center',
    },
       
        
    playerX: {
        fontSize: 40,
        color: 'green',
        
    },
    playerO: {
        fontSize: 40,
        color: '#fFF343',
    
    },
    menuButton: { 
        marginTop: 20,
        alignItems: 'center',
    
        
    },
    textMenuButton: {
        fontSize: 29,
        color: '#FF0000',
        
    },
    winner: {
        fontSize: 30,
        margin: '29%',
        fontWeight: "bold",
        color:'#333',
        marginTop: 2,
        
    },



});

export default styles;