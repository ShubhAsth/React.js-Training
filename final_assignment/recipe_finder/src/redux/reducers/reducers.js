import {SET_SELECTED_CUISINES} from '../actions/actions';

const initialState = {
    selectedCuisines: [],
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CUISINES:
            return {
                ...state,
                selectedCuisines: action.payload,
            };
        default:
            return state;
    }
};

export default reducers;