

const initialState = {
    tasks: []
};
export default function tasksReducer(state = initialState, action){

    switch(action.type){
        case "ADD_TASK":

            return {
                ...state,
                tasks:[
                    ...state.tasks,{
                        title: action.payload.title
                    }
                ]
            };

        default:
            return state;
    }

}