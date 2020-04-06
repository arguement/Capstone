import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';

export default class extends Component{

    state ={
        name: '',
        pass: ''
    }


    render(){
        return(
            <View style={{justifyContent: 'center',flex:1}}>
                        <TextInput
                label="Name"
                returnKeyType="next"
                value={this.state.name}
                onChangeText={text => this.setState({name:text})}
                // error={!!email.error}
                // errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                type="outlined"
            />

            <TextInput
                label="Password"
                returnKeyType="done"
                value={this.state.pass}
                onChangeText={text => this.setState({pass: text})}
                // error={!!password.error}
                // errorText={password.error}
                type="outlined"
                secureTextEntry
            />

            <View style={styles.forgotPassword}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                >
                <Text style={styles.label}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <Button mode="contained" onPress={()=>this.props.navigation.navigate('Home')}>
                Login
            </Button>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    
  });