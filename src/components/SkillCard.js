import React from "react";
import {
    TouchableOpacity,
    Text, 
    StyleSheet,

} from 'react-native'


export function SkillCard({ skill }) {
    return (
        <TouchableOpacity style={styles.mySkillButton}>
            <Text style={styles.textMySkills}>
            {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mySkillButton:{
        backgroundColor: '#1F1E25',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
        
    },
    textMySkills: {
        color: '#E574BC',
        fontSize: 24,
        fontWeight: 'bold',

    }
})