import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import Field from "../reuse/Field";
import DatePicker from "../reuse/DatePicker";


export default class RegisterScreen extends Component{

    state = {
        fname: "",
        surname: "",
        middleName: "",
        birthDate: new Date(),
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
<ScrollView>
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
                        style={{marginTop: "7%"}}
                        label="First Name"
                        
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
                        label="Email"
                        value={this.state.email}
                        onChangeText={text => this.setState({email:text})}
                        // error={!!email.error}
                        // errorText={email.error}
                        
                        
                    />
                  
                   
                    <Field 
                        label="Home Address"
                        value={this.state.homeAddress}
                        onChangeText={text => this.setState({homeAddress:text})}
                        // error={!!email.error}
                        // errorText={email.error}
                        
                        
                    />
                    <Field 
                        label="Maiden Name"
                        value={this.state.maidenName}
                        onChangeText={text => this.setState({maidenName:text})}
                        // error={!!email.error}
                        // errorText={email.error}
                        
                        
                    />
                    <Field 
                        label="Occupation"
                        value={this.state.occupation}
                        onChangeText={text => this.setState({occupation:text})}
                        // error={!!email.error}
                        // errorText={email.error}
                        
                        
                    />
                    <Field 
                        label="Home Number"
                        value={this.state.homeNumber}
                        onChangeText={text => this.setState({homeNumber:text})}
                        // error={!!email.error}
                        // errorText={email.error}
                        
                        
                    />
                     {/* {
        fname: "",
        surname: "",
        middleName: "",
        birthDate: new Date(),
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
    } */}
                    <Field 
                        label="Nationality"
                        value={this.state.nationality}
                        onChangeText={text => this.setState({nationality:text})}
                        // error={!!email.error}
                        // errorText={email.error}
                        
                        
                    />
                    <Field 
                        label="Resident Status"
                        value={this.state.residentStatus}
                        onChangeText={text => this.setState({residentStatus:text})}
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
                         style={{color:"red"}}
                        
                    />

                    
                    <View style = {{backgroundColor: "grey"}}>
                        <DatePicker 
                        date={this.state.birthDate}
                        onSelect={nextDate => this.setState({birthDate: nextDate})}
                        label = {"Date of Birth"}
                        
                        />
                    </View>
                    

                    <Button  mode="contained" onPress={()=>this.props.navigation.navigate('Login')}>
                        Press me
                    </Button>
                    

                    
            </View>
</ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    inputContainerStyles: {
        justifyContent: 'center',
        flex:1,
       margin: "7%"
    }
})