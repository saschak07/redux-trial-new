import * as actionType from './action'

const initialState = {
    restaurants: [],
    filter:[]
};

const reducer = (state = initialState,action) => {

    switch(action.type){
        case actionType.SET_LIST:
            return {
                ...state,
                restaurants:action.restaurants
            }
    }
    return state;
}

export default reducer;