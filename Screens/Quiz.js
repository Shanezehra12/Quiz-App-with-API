import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {
  const [question, setQuestion] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOption] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false)

  const getQuiz = async() => {
    setIsLoading(true)
    const url = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);
    setOption (generateOptionsAndShuffle(data.results[0]))
    setIsLoading(false)
  };

  useEffect (() => {
    getQuiz();
  },[]);

  const handleNextPress = () => {
    setQues(ques+1)
    setOption (generateOptionsAndShuffle(question[ques+1]))

  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push (_question.correct_answer)

    shuffleArray(options)
    return options
  };

  const handlSelectedOption=(_options)=>{
    if(options===question[ques].correct_answer){
      setScore(score+10)
    }
    if(ques!==9){
      setQues(ques+1)
      setOption(generateOptionsAndShuffle(question[ques+1]))
    }
    if(ques===9){
      handleShowResult()
    }
  }

 const handleShowResult=() =>{
  navigation.navigate('Result' , {
    score: score
  })}

  return (
    <View style={{backgroundColor: "pink", height: '100%', paddingHorizontal: 20, flex: 1}}>
    <View Style={styles.container}>
      {isLoading ? <View style={{height: "100%", flex: 1}}>
        <Image source={{uri: "http://resources.eumetrain.org/ePort_MapViewer/images/loading.gif"}}
        style={{width: 300, height: 300, justifyContent: "center", alignItems: "center" }} />
  
      </View> : question&& (

      <View>

    {/* <<<<<<<<<<<<<<<<<<<<<< QUESTION STYLING >>>>>>>>>>>>>>>>>>>>>>>>>>*/}  

       <View style={styles.Top}>
        <Text style={styles.question}> Q: {decodeURIComponent( question[ques].question)} </Text>
       </View>

    {/* <<<<<<<<<<<<<<<<<<<<<< BUTTON STYLING >>>>>>>>>>>>>>>>>>>>>>>>>>*/}  

      <View style={styles.Options}>

        <TouchableOpacity style={styles.optionbutton}
        onPress={()=>handlSelectedOption(options[0])}>
          <Text style={styles.optionText}> {decodeURIComponent(options[0])} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionbutton}
        onPress={()=>handlSelectedOption(options[1])}>
          <Text style={styles.optionText}> {decodeURIComponent(options[1])} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionbutton}
        onPress={()=>handlSelectedOption(options[2])}>
          <Text style={styles.optionText}> {decodeURIComponent(options[2])} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionbutton}
        onPress={()=>handlSelectedOption(options[3])}>
          <Text style={styles.optionText}> {decodeURIComponent(options[3])} </Text>
        </TouchableOpacity>

      </View>

    {/* <<<<<<<<<<<<<<<<<<<<<< END BUTTON STYLING >>>>>>>>>>>>>>>>>>>>>>>>>>*/} 

      <View style={styles.Bottom}>

         {ques!==9 && <TouchableOpacity style={styles.button} onPress={handleNextPress}>
           <Text style={styles.buttonText}> SKIP </Text>
         </TouchableOpacity> }

         {ques===9 && <TouchableOpacity style={styles.button} onPress={handleShowResult}>
           <Text style={styles.buttonText}> SHOW RESULT </Text>
         </TouchableOpacity> }

      </View> 

      </View>
      )}
    </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({

  Top:{
    marginVertical: 16,
    
  },

  Options:{
   marginVertical: 16, 
   
  },

  Bottom:{
    
    marginBottom: 70,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,

  },

  button:{
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
    fontSize: 16,
    fontWeight: '600'
},

question:{
  fontSize: 24,
  color: "black",
},

optionText:{
  color: "black",
  fontSize: 20,
  fontWeight: '500'
},

optionbutton:{
  paddingVertical: 12,
  marginVertical: 6,
  backgroundColor: "#cdb4db",
  paddingHorizontal: 12,
  borderRadius: 12
}

});