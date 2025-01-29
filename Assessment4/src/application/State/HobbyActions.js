import axios from "axios";


export const saveHobby = (hobby)=>{

    return function (dispatch) {
        console.log("hobby actions: dispatch: ", dispatch)

        axios.post("http://localhost:9000/hobby/saveHobby",
            hobby
        )
        .then((allData)=>{
            let hobbyRes = allData.data;
            console.log("hobbyResponse ", hobbyRes);
            alert("You're hobby has been saved!");
            dispatch(getHobbies());
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};

export const addHobby = (hobby)=>{
    console.log("hobby action: addHobby func: ", hobby)
    return {
        
        type : "STORE.ADD_HOBBY",
        payload : {hobby}
    }
}

export const setLoading = (loading)=>{
    return {
        type : "SET_LOADING",
        payload : {loading}
    }
}

export const getHobbies = ()=>{

    return function (dispatch) {

        axios.get("http://localhost:9000/hobby/getHobbies")
        .then((allHobbies)=>{
            let hobbyRes = allHobbies.data;
            console.log("Hobby actions: getHobby: ", hobbyRes);
            dispatch(addHobby(hobbyRes)) //shouldn't this load them to the store?
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Product", err)
        })
    }
};
