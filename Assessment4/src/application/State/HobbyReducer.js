

const Initial_State = {
    Product : {
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
            //..state - products[] and defaultProduct
            return { ...state, Products : action.payload.products } 

        case "SET_LOADING" :
            return { ...state, Loading : action.payload.loading }

        default:
            return state
    }
}

export default HobbyReducer;