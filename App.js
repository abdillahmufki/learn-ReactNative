/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: 'blue',
      }}>
      <View>
        <Navbar />
      </View>
      <View>
        <Text
          style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 700,
            textAlign: 'center',
            textDecorationLine: 'underline',
            letterSpacing: 2,
          }}>
          <Text style={{color: 'blue'}}>Ho</Text>Me
        </Text>
      </View>
      <View>
        <Footer />
      </View>
    </View>
  );
}

const Navbar = () => {
  return (
    <View style={{margin: 20}}>
      <Text>Contact</Text>
      <Text>About</Text>
      <Text>Portfolio</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={{margin: 20}}>
      <Text>Footer</Text>
    </View>
  );
};
