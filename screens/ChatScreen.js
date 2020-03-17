import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import Fire from "./Fire";

export default class ChatScreen extends Component{
    

    state = {
        messages : []
    }

    get user(){
        console.log("inside user");
        console.log(Fire.uid)
        console.log({
            _id: Fire.uid,
            name: "jordan"
        });
        return {
            _id: 1,
            name: "jordan"
        }
    }

    componentDidMount(){
        Fire.get(message => 
            this.setState(previous =>({
                messages: GiftedChat.append(previous.messages,message)
            })))
    }

    componentWillMount(){
        Fire.off();
    }
    render(){
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={Fire.send}
                user={this.user}
      />
        );
    }
}
