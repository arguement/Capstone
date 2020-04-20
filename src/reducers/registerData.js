export default registerData = (state={},action)=>{

    switch (action.type) {
        case "STORE":
            
            return {...action.data,...state};
    
        default:
            return state;
    }
}


