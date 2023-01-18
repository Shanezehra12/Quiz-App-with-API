import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Title from '../Components/Title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}> 
        <Title titleText="QUIZZLER"/> 

        <View style={styles.bannerContainer}>
            <Image source={require("../Assets/Logo1.png")}
             style={styles.banner}
             resizeMode= "contain"
             />
        </View>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
            <Text style={styles.buttonText}> STARTED </Text>
        </TouchableOpacity>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    bannerContainer:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

    banner:{
        height: 350,
        width: 350
    },

    container:{
        paddingTop: 10,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: "pink" 
    },

    button:{
        width: '100%',
        backgroundColor: '#0A85ED',
        padding: 10,
        borderRadius: 16,
        borderColor: "black",
        borderWidth: 2,
        alignItems: 'center',
        marginBottom: 30
    },

    buttonText:{
        color: "black",
        fontSize: 20,
        fontWeight: '600'
    },
})