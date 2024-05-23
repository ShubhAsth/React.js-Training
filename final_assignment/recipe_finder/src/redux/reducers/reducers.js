import {
    SET_RECIPES,
    SET_SEARCH_INPUT,
    SET_SELECTED_CUISINES,
    SET_SELECTED_DIETS,
    SET_TOTAL_PAGE
} from '../actions/actions';

const initialState = {
    selectedCuisines: [],
    selectedDiets: [],
    filteredRecipes: [],
    searchInput: '',
    totalPage: 0
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CUISINES:
            return {
                ...state,
                selectedCuisines: action.payload,
            };
        case SET_SELECTED_DIETS:
            return {
                ...state,
                selectedDiets: action.payload,
            };
        case SET_RECIPES:
            return {
                ...state,
                filteredRecipes: action.payload,
            };
        case SET_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.payload,
            };
        case SET_TOTAL_PAGE:
            return {
                ...state,
                totalPage: action.payload,
            };
        default:
            return state;
    }
};

export default reducers;