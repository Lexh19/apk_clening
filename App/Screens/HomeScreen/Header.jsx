import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function Header() {
    const {user,isloading}=useUser();
  return user&&(
    <View>
      <Image source={{uri:user?.imageUrl}}
      style={styles.userImage}/>
    </View>
  )
}

const style = StyleSheet.create({
    userImage:{
        width:45,
        height:45,
        borderRadius:99,
    }
})