import React from "react";
import {
    TouchableOpacity,
    Text, 
    StyleSheet,
    TouchableOpacityProps

} from 'react-native';

interface SkillProps extends TouchableOpacityProps{
    skill: string;
}


export function SkillCard({ skill, ...rest } : SkillProps) {
    return (
        <TouchableOpacity style={styles.mySkillButton}>
            <Text 
            style={styles.textMySkills}
            {...rest}
            >
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