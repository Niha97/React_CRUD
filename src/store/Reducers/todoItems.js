import {FETCH_TODOS_SUCCESS} from '../Actions/types';

const initialState ={
    todoItems: [],
}

export default (state= initialState, action ) => {
    switch(action.types){
        // case types.ADD_TODOS_SUCCESS:
        //     return {
        //         ...state,
        //         todoItems: action.item
        //     }
        case FETCH_TODOS_SUCCESS:
            console.log("jhvghj",action.items);
            return {
                todoItems: action.items
            }
        default:
            return state
    }
}