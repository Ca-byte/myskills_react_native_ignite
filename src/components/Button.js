import React from "react";
import { 
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';


export function Button({ onPress }){
    return(
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={onPress}
        >
            <Text style={styles.buttonText}>
                Add
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E574BC',
        padding: 10,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color:'#C52184',
        fontSize: 18,
        fontWeight: 'bold'

    },
})