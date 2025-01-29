import axios from "axios";


export const saveHobby = (hobby)=>{

    return function (dispatch) {

        axios.post("http://localhost:9000/hobby/saveHobby",
            hobby
        )
        .then((allData)=>{
            let hobbyRes = allData.data;
            console.log("hobbyResponse ", hobbyRes);
            alert("You're hobby has been saved!");
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};

export const addHobby = (hobby)=>{
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
        //dispatch(loading(true));

        axios.get("http://localhost:9000/hobby/getHobbies")
        .then((allHobbies)=>{
            let hobbyRes = allHobbies.data;
            console.log("hobby response", hobbyRes);
            //dispatch(loading(false));
            dispatch(addHobby(hobbyRes))
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Product", err)
        })
    }
};
