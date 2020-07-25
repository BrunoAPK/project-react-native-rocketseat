import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// Elementos no react native não possuem valor semântico (significado)
// Não possuem estilização própria

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#000"/>
            <View style={styles.container}>
                <Text style={styles.title}>GoStack</Text>
            </View>
        </>
    )
}

//trabalhando com css
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center',
        justifyContent: 'center'   
    },
    title: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: 'bold'
    }
});