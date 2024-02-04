import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Color from '../Utils/Color'




export default function Login() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../../../assets/image/login.png')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{fontSize:27, color:Color.WHITE, textAlign:'center'}}>
          Let's Find 
          <Text style={{fontWeight:'bold'}}> Professional Cleaning and Repair </Text>Service
        </Text>

        <Text style={{fontSize:17, color:Color.WHITE, textAlign:'center', marginTop:20}}>Best App to find service near your which delivery your professional service </Text>

        <TouchableOpacity style={styles.button} onPress={()=> console.log.apply("button_click")}>
          <Text style={{textAlign:'center', fontSize:17, color:Color.PRIMARY}}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginImage: {
    width: '70%',
    height: '50%', 
    marginTop: '30%',
    borderWidth: 4,
    borderColor: Color.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: '100%',
    backgroundColor: Color.PRIMARY,
    height: '50%', 
    marginTop: '-10%', 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: '5%', 
  },
  button:{
    padding:15,
    backgroundColor:Color.WHITE,
    borderRadius:99,
    marginTop:40
  }
})