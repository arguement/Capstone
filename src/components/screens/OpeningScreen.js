import React,{ Component } from "react";
import { Text,View,StyleSheet,TouchableNativeFeedback,Image} from "react-native";
import { Ionicons,MaterialIcons,FontAwesome,AntDesign } from '@expo/vector-icons';
import logo from '../../../assets/EagleEyeIcon.png'; 

export default class extends Component{

    render(){
        return(
            <View>
                <Image source={logo} style={{ width: 200, height: 200,display:'flex',alignSelf:'center',margin:'10%' }} /> 
                <View style={{display:'flex',flexDirection:'row',justifyContent: 'center'}}>
                    <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('Register') } >
                        <View style={ styles.containerStyles }>
                            
                                <View style={ styles.innerBody }>
                                    <View style = { styles.topContainer }>
                                        <FontAwesome name="sign-in" size={50} color="black" />
                                        <Text style={ styles.topText }>Sign Up</Text>
                                    </View>
                                    
                                </View>
                                <View style={ styles.lowerContainer }>
                                        <Text > Create an account </Text>
                                </View>
                            
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('Login')} >
                        <View style={ styles.containerStyles }>
                            
                                <View style={ styles.innerBody }>
                                    <View style = { styles.topContainer }>
                                        <AntDesign name="login" size={50} color="black" />
                                        <Text style={ styles.topText }>Login</Text>
                                    </View>
                                    
                                </View>
                                <View style={ styles.lowerContainer }>
                                        <Text > Already have an account</Text>
                                </View>
                            
                        </View>
                    </TouchableNativeFeedback>
                </View>

            </View>
        )
    }

}


const paddingVal = 10;
const styles = StyleSheet.create({
    containerStyles:{
        borderWidth: 0.5,
        borderColor: 'grey',
        padding: 1,
        shadowColor:'#000',
        shadowOffset: { width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius: 2,
        elevation:1,
        width: 170,
        height:200,
        margin: 5,
        backgroundColor: 'white'
    },
    innerBody:{
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        margin: 8,
        padding: 7
    },
    lowerContainer: {
        alignItems:'center',
        justifyContent: 'center'
      },
      iconStyles:{
           marginTop: 23,
           marginBottom: 23
      },
      topText:{
          fontWeight:'bold',
          fontSize: 15
      }
});