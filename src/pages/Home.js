import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList,

} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


export function Home(){
    const [newSkill, setNewSkill ]=useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greetings, setGreetings] = useState('');


    const handleMyNewSkills = () => {
        setMySkills(prevState => [...prevState, newSkill])
    }

    useEffect(() => {
        const currentHour = new Date().getTime();

        if( currentHour < 12) {
            setGreetings('Good Morning')
        } else if (currentHour >= 12 && currentHour < 18){
            setGreetings('Good Afternoon');
        }else {
            setGreetings('Good Evening')
        }
    }, [])




  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Welcome, Caroline!
        </Text>
        <Text style={styles.greeting}>
            {greetings}

        </Text>

        <TextInput
         style={styles.input}
         placeholder= 'New skill'
         placeholderTextColor = '#444'
         onChangeText={setNewSkill}
         />

        <Button onPress={handleMyNewSkills}/>
         
         <Text style={[styles.title, {marginVertical: 40}]}>
          My Skills
         </Text>


         <FlatList 
            data={mySkills}
            keyExtractor={item => item}
            renderItem={({item}) =>(
              <SkillCard skill={item} />
           )}
          />



      
            
               
            
        
       

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: '#121015',
        paddingVertical: 40,
        
    },
    title: {
        fontSize: 24,
        color: '#C52184',
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        marginTop: 30,
        borderRadius: 7,
        padding: Platform.OS === 'ios' ? 15 : 10,

    },
    greeting:{
        color: '#E574BC'
    }
   
})