import { Dialogflow_V2 } from 'react-native-dialogflow';
import {dialogflowConfig} from './env';


const BOT_USER = {
    _id: 2,
    name: 'Eagle Eye',
    avatar: 'https://w0.pngwave.com/png/695/247/chatbot-logo-robotics-robot-png-clip-art.png'
  };

const dialogFlowSetup = ()=>{
    Dialogflow_V2.setConfiguration(
        dialogflowConfig.client_email,
        dialogflowConfig.private_key,
        Dialogflow_V2.LANG_ENGLISH_US,
        dialogflowConfig.project_id
      );
}
function handleGoogleResponse(result,db) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    sendBotResponse(text,db);
}

function sendBotResponse(text,db) {
    let msg = {
      _id: 2,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };

    // this.setState(previousState => ({
    //   messages: GiftedChat.append(previousState.messages, [msg])
    // }));

    db.push(msg);
    
  }

  function requestQuery(message,db){
    Dialogflow_V2.requestQuery(
        message,
        result => handleGoogleResponse(result,db),
        error => console.log(error)
      );
  }


  export {sendBotResponse,handleGoogleResponse,dialogFlowSetup,requestQuery}