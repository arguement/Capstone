import { Dialogflow_V2 } from 'react-native-dialogflow';
import {dialogflowConfig} from './env';
import store from '../store';

let payload = {}
const BOT_USER = {
    _id: 2,
    name: 'Eagle Eye',
    avatar: 'https://w0.pngwave.com/png/695/247/chatbot-logo-robotics-robot-png-clip-art.png'
  };
first = false;
first_cat = null;

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
    if (result.queryResult.intent.displayName == "0 - getCrime" && first == false){
      const context = result.queryResult.outputContexts;

      const test = context[1].parameters;
      const {"crime-categories":cat} = test;
      first_cat = cat;
      first = true;
      console.log(`new Category is ${first_cat} and actual is ${first_cat[0]} `);
    }
    

    if (result.queryResult.intent.displayName == "getCrimeDescription"){

     
      
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
      const state = store.getState();
      const registerData = state.registerData;

      let currentDate = new Date();
      const {"crime-categories":cat,"location.original":location,"date-time":dateTimeCommited,weapon,gender} = test;

      const {endDateTime} = dateTimeCommited

      payload = {
        ...payload,
        "date-time-reported":currentDate,
        "offence":/* cat[1]||cat[0] */first_cat[0],
        "offence-location":location,
        "date-time-commited":endDateTime || dateTimeCommited,
        weapon,
        "gender":gender[0]
      }
      console.log(payload);
      console.log(`new Category is ${first_cat} and actual is ${first_cat[0]} and cat1: ${cat[0]} and cat2: ${cat[1]}`);

      const {
        birthDate,
        email,
        fname,
        homeAddress,
         maidenName,
       middleName,
        surname,
        nationality,
        occupation,
        residentStatus,
        cellNumber
    } = registerData;
  
        
  
        
      const registerPayload = {
          "birth-date":birthDate,
          email,
          "first-name":fname,
          "home-address": homeAddress,
          "maiden-name": maidenName,
          "middle-name": middleName,
          surname,
          nationality,
          occupation,
          "resident-status": residentStatus,
          "cell-number": cellNumber,
          status: "pending"
      }
      console.log(registerPayload)

      const combinePayload = {...payload,...registerPayload};

       firestoreDb.collection("Crime Report").add(combinePayload).then(ref => {
        console.log("stored");
      }).catch(()=>{
        console.log("error");
      })

    }
}
    console.log("sending responses");
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