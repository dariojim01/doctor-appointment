import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import iprofileapp from './../../assets/images/profileapp.png'
import { Colors } from '@/constants/Colors'
import SignInWithOAuth from './../../components/SignInWithOAuth'
export default function Login() {
  return (
    <View style={{alignItems: 'center',
        backgroundColor:Colors.LIGHT_GRAY,
    }}>
        <Image source={iprofileapp}
        style={styles.appImage}
        />
        <View style={{backgroundColor:Colors.white,
            padding:25,
            alignItems: 'center',
            marginTop:-50,
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
        }}>
            <Text style={styles.heading}>Your ultimate Doctor</Text>
          
          <Text style={styles.heading}>Appointment Booking App</Text>
           <Text style={{textAlign: 'center', marginTop:20,

           }}>Book Appointments Effertlessly and manager your health</Text>
          <SignInWithOAuth />
        </View>
  
    </View>
  )
}
const styles = StyleSheet.create({
  appImage:{
    width: 300,
    height: 500,
    objectFit: 'cover',
    marginTop: 50,
    borderRadius:20,
    borderWidth:6,
    borderColor:'#000'
  },
  heading :{
    fontSize: 28,
    fontWeight: 'bold',
  }
})
