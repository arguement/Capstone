import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { Input } from '@ui-kitten/components';

export default function Field(props){

    return (
        <View style={props.style}>


                    <Input
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