

const Initial_State = {
    Hobby : {
        name : "",
    },
    Hobbies : [],
    Loading : false
}

//write callback/ reducer to generate new state upon action change
let HobbyReducer = (state = Initial_State, action)=>{
    //switch case logice to read action type and return new state / updated state

    switch (action.type) {
        
        case "STORE.ADD_HOBBY" :
             console.log("REDUCER: action.payload.Hobbies: ", action.payload.hobby)
            return { ...state, Hobbies : action.payload.hobby }

            /*
                action.payload.hobby is defined in HobbyActions - see below
                    return {
                        type : "STORE.ADD_HOBBY",
                        payload : {hobby}
                    }

                Hobbies is the array declared here, and {hobby} is the payload value being passed/applied to the Hobbies array
                action.payload.hobby is how we access it

            */
        case "SET_LOADING" :
            return { ...state, Loading : action.payload.loading }

        default:
            return state
    }
}

export default HobbyReducer;