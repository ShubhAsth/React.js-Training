import {
    SET_MEAL_TYPE,
    SET_RECIPES,
    SET_SEARCH_INPUT,
    SET_SELECTED_CUISINES,
    SET_SELECTED_DIETS,
    SET_TOTAL_PAGE,
    SET_IS_LOADING_RECIPES
} from '../actions/actions';

const initialState = {
    selectedCuisines: [],
    selectedDiets: [],
    filteredRecipes: [],
    searchInput: '',
    totalPage: 0,
    mealType: [],
    isLoadingRecipes: false
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
        case SET_MEAL_TYPE:
            return {
                ...state,
                mealType: action.payload,
            };
        case SET_IS_LOADING_RECIPES:
            return {
                ...state,
                isLoadingRecipes: action.payload,
            };
        default:
            return state;
    }
};

export default reducers;