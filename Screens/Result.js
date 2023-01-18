import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../Components/Title';


const Result = ({navigation, route}) => {
  const {score} = route.params

  const resultBanner = score> 10? require("../Assets/win.png") : require("../Assets/lose.png")

  return (
    <View style={{backgroundColor: "pink"}}>
    <View style={styles.container}> 
      <Title titleText="RESULT"/> 
      <Text style={styles.scoreValue}> {score} </Text>

        <View style={styles.bannerContainer}>
            <Image source={resultBanner}
             style={styles.banner}
             resizeMode= "contain"
             />
        </View>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
            <Text style={styles.buttonText}> GO TO HOME </Text>
        </TouchableOpacity>

    </View>
    </View>
    
  )
}

export default Result

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
    /* backgroundColor: "#DDB4F6" */
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

scoreValue:{
  color: "black",
  fontSize: 30,
  fontWeight: '600',
  alignSelf: 'center'

},
})