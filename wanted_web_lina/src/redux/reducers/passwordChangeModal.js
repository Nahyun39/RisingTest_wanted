const intialState = {
    isPWMoOpen: false,
}

const PasswordChangeModalReducer = (state = intialState, action) => {
    switch(action.type){
        case "PWCHANGEMODALOPEN": {
            return{
                ...state,
                isPWMoOpen: true,
            };
        }
        case "PWCHANGEMODALCLOSE": {
            return{
                ...state,
                isPWMoOpen: false,
            };
        }
        default: {
            return{
                ...state,
            };
        }
    }
};

export default PasswordChangeModalReducer;