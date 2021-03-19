import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import db from '../Config'

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };
  isButtonPressed(buttonColor){
var team=db.ref('teams/'+buttonColor+'/');
var time=new Date().getTime();
team.update({
  'isButtonPressed':true,
'timestamp':time
})
  }
  render() {
    return (
      <TouchableOpacity style={[styles.forButton,{backgroundColor:this.props.color}]} onPress={()=>{
        var buttonColor=this.props.color
        this.playSound() 
        this.isButtonPressed(buttonColor)}}>
        <Text style={styles.forText}>Press Me</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  forButton: {
    marginLeft: 75,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
    marginTop: 100,
  },
  forText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SoundButton;