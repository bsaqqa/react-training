
export const POST_GENERATE  = "GENERATE";
export const CHECK_POST     = "CHECK_POST";

const intialState = [];

const postReducer = (state = intialState, action)=>{
    switch(action.type){
        case POST_GENERATE:
            return [
                ...state ,
                {
                    id: (new Date()).getUTCMilliseconds(),
                    title: "Post "+ (new Date()).getUTCMilliseconds(),
                    checked: false
                }
            ];
        case CHECK_POST: 
            let postIndex = state.findIndex(el => el.id === action.payload);
            state[postIndex] = {
                ...state[postIndex],
                checked: !state[postIndex].checked
            }
            return state;
        default:
            return state;
    }
}


export default postReducer;