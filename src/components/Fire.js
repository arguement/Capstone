import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"
import {dialogFlowSetup,handleGoogleResponse,sendBotResponse,requestQuery} from '../components/dialogFlow'
class Fire{


    constructor(){

         this.init()
        this.checkAuth()
        dialogFlowSetup()
        
        

    }

     init = () =>{
        // if (!firebase.app.length){
            firebase.initializeApp({
                apiKey: "AIzaSyBQ-177bOc9oYcFYkkEFIWCGM9sPBOQgJ8",
                authDomain: "capstone-5515a.firebaseapp.com",
                databaseURL: "https://capstone-5515a.firebaseio.com",
                projectId: "capstone-5515a",
                storageBucket: "capstone-5515a.appspot.com",
                messagingSenderId: "1029326192567",
                appId: "1:1029326192567:web:a45a3faa83bfefe6437232",
                measurementId: "G-3QL74N87GF"
              })
        // }
    }
    checkAuth = ()=>{
       firebase.auth().onAuthStateChanged(user =>{
           if(!user){
               firebase.auth().signInAnonymously();
           }
       }) 
    }

    send = messages =>{
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user:item.user
            }
            let mess = messages[0].text;

            
            requestQuery(mess,this.db,this.firestoreDb)
        
            this.db.push(message);

        });
    }

    parse = message =>{
        
        console.log()
        const {user,text,timestamp} = message.val();
        const {key: _id} =  message;
        const createAt = new Date(timestamp);

        

        return {
            _id,
            createAt,
            text,
            user
        }
    }

    get = callback =>{
        this.db.on("child_added",snapshot => callback(this.parse(snapshot)))
    }

    off(){
        this.db.off();
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid
        // return firebase.auth().currentUser.uid;
    }

    get db(){
        // return firebase.firestore().collection("messages")
        return firebase.database().ref("messages");
    }

    get firestoreDb(){
        return firebase.firestore();
    }
}

Fire.shared = new Fire();
export default Fire;