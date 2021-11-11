import React from "react";
import { 
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableHighlightProps
} from 'react-native';

interface ButtonProps extends TouchableHighlightProps {
    title:  string;
}


export function Button({ title, ...rest } : ButtonProps){
    return(
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
          {...rest}
        >
            <Text style={styles.buttonText}>{ title }</Text>
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