const initialState = "blue"

const changeBack = (state = initialState, action) => {

    switch (action.type) {
        case "BGCOLOR1": return "green";
        case "BGCOLOR2": return "blue";
        default: return state;
    }

}

export default changeBack;