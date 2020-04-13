import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';


export default function Field(props){

    return (
        <View style={props.style}>


                    <TextInput
                    label="Name"
                    returnKeyType="next"
                    value={props.value}
                    onChangeText={props.onChangeText}
                    // error={!!email.error}
                    // errorText={email.error}
                    {...props}
                    type="outlined"
                />

        </View>
    );

}