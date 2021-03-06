import React, {useEffect, useState} from 'react';
import { View, ScrollView, SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

// Elementos no react native não possuem valor semântico (significado)
// Não possuem estilização própria

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        });
    }, []);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#000"/>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item:project }) => (
                        <Text style={styles.title}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>
            {/*<View style={styles.container}>
                {projects.map(project => 
                    <Text key={project.id} style={styles.title}>{project.title}</Text>
                )}
            </View>*/}
        </>
    )
}

//trabalhando com css
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        //alignItems: 'center',
        //justifyContent: 'center'   
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50
    }
});