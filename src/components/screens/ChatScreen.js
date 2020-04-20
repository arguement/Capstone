import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import Fire from "../Fire";





export default class ChatScreen extends Component{

    
    

    state = {
        messages : [
            {
                _id: 1,
                text: `Hi! I am the Eagle Eye \nyou can begin your conversation`,
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'FAQ Bot',
                  avatar: 'https://w0.pngwave.com/png/695/247/chatbot-logo-robotics-robot-png-clip-art.png'
                }
              }
        ]
    }

    get user(){
        
        return {
            _id: 1,
            name: "jordan"
        }
    }

    

    componentDidMount(){

        
        

        Fire.shared.get(message => 
            this.setState(previous =>({
                messages: GiftedChat.append(previous.messages,message)
            })))

        console.log("finish");
    }

    componentWillUnmount(){
        Fire.shared.off();
    }
    render(){
        return (
            
                
                <GiftedChat
                    messages={this.state.messages}
                    onSend={Fire.shared.send}
                    user={this.user}
                
        />
           
        );
    }
}
