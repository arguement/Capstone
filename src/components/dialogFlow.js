import { Dialogflow_V2 } from 'react-native-dialogflow';
import {dialogflowConfig} from './env';

let payload = {}
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
function handleGoogleResponse(result,db,firestoreDb) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    // console.log(result);
    console.log("______")
    console.log(result.queryResult);
    
    // console.log(result.queryResult.parameters)

    

    if (result.queryResult.intent.displayName == "getCrimeDescription"){

      // const {
      //   "crime-categories":crimeCategory,
      //   "date-time":dateTime,
      //   time,
      //   victim,
      //   location: {city}
      // } = result.queryResult.parameters;

      // const data = {
      //   crimeCategory,
      //   dateTime,
      //   time,
      //   victim,
      //   city
      // }

      // firestoreDb.collection("Crime Report").add(data).then(ref => {
        
      // });
      
      
  }
    if (result.queryResult.intent.displayName == "2 - getOffenders"){

      payload.description = result.queryResult.fulfillmentText;
      // console.log(result.queryResult.fulfillmentText);
      
      
  }
  if ("diagnosticInfo" in result.queryResult) {
    //"end_conversation"
  
    if (result.queryResult.diagnosticInfo.end_conversation == true){
      const context = result.queryResult.outputContexts;

      const test = context[1].parameters;

      let currentDate = new Date();
      const {"crime-categories":cat,"location.original":location,"date-time":dateTimeCommited,weapon,gender} = test;
      payload = {...payload,"offence":cat[1],"offence-location":location,"date-time-commited":dateTimeCommited,weapon,"gender":gender[0]}
      console.log(payload);

       firestoreDb.collection("Crime Report").add(payload).then(ref => {
        console.log("stored");
      });

    }
}
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

  function requestQuery(message,db,firestoreDb){
    Dialogflow_V2.requestQuery(
        message,
        result => handleGoogleResponse(result,db,firestoreDb),
        error => console.log(error)
      );
  }


  export {sendBotResponse,handleGoogleResponse,dialogFlowSetup,requestQuery}