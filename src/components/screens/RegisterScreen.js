import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import Field from "../reuse/Field";

export default class RegisterScreen extends Component{

    state = {
        fname: "",
        surname: "",
        middleName: "",
        birthDate: "",
        cellNumber: "",
        email: "",
        homeAddress: "",
        maidenName: "",
        occupation :"",
        homeNumber: "",
        nationality: "",
        residentStatus: "",
        pass: "",
        confirmPass: ""
    }


    render(){
        return(

            <View style={styles.inputContainerStyles}>

                    <Field 
                        value={this.state.name}
                        onChangeText={text => this.setState({fname:text})}
                        // error={!!email.error}
                        // errorText={email.error}
                        autoCapitalize="none"
                        // autoCompleteType="email"
                        // textContentType="emailAddress"
                        // keyboardType="email-address"
                        
                    />
                    <Field 
                        label="Surname"
                        value={this.state.surname}
                        onChangeText={text => this.setState({surname:text})}
                        // error={!!email.error}
                        // errorText={email.error}
                        
                        
                    />
                    <Field 
                        label="Middle name"
                        value={this.state.middleName}
                        onChangeText={text => this.setState({middleName:text})}
                        // error={!!email.error}
                        // errorText={email.error}
                        
                        
                    />
                    <Field 
                        label="Middle name"
                        value={this.state.middleName}
                        onChangeText={text => this.setState({middleName:text})}
                        // error={!!email.error}
                        // errorText={email.error}
                        
                        
                    />

                    <Field 
                         label="Password"
                         returnKeyType="done"
                         value={this.state.pass}
                         onChangeText={text => this.setState({pass: text})}
                         // error={!!password.error}
                         // errorText={password.error}
                         type="outlined"
                         secureTextEntry
                        
                    />
                    <Field 
                         label="Confirm Password"
                         returnKeyType="done"
                         value={this.state.confirmPass}
                         onChangeText={text => this.setState({confirmPass: text})}
                         // error={!!password.error}
                         // errorText={password.error}
                         type="outlined"
                         secureTextEntry
                        
                    />

                    
            </View>

        );
    }
}

const styles = StyleSheet.create({
    inputContainerStyles: {
        justifyContent: 'center',
        flex:1
    }
})