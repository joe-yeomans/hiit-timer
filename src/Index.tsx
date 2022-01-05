import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Input from './Components/Input';

const Index = () => {
    const [exerciseTime, setExerciseTime] = useState('');
    const [restTime, setRestTime] = useState('')

    return (
        <View style={styles.container}>
            <Input onChange={(text) => setExerciseTime(text)} placeholder='Time'/>
            <Text style={{ color: 'red', fontSize: 20 }}>{exerciseTime}</Text>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
