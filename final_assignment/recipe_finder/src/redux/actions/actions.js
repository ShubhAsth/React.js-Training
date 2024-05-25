export const SET_SELECTED_CUISINES = 'SET_SELECTED_CUISINES';
export const SET_SELECTED_DIETS = 'SET_SELECTED_DIETS';
export const SET_RECIPES = 'SET_RECIPES'
export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT'
export const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE'
export const SET_MEAL_TYPE = 'SET_MEAL_TYPE'
export const SET_IS_LOADING_RECIPES = 'SET_IS_LOADING_RECIPES'

export const setSelectedCuisines = (selectedCuisines) => ({
    type: SET_SELECTED_CUISINES,
    payload: selectedCuisines,

});

export const setSelectedDiets = (selectedDiets) => ({
    type: SET_SELECTED_DIETS,
    payload: selectedDiets,
});

export const setRecipes = (recipes) => ({
    type: SET_RECIPES,
    payload: recipes,
});

export const setSearchInput = (input) => ({
    type: SET_SEARCH_INPUT,
    payload: input,
});

export const setTotalPage = (totalPage) => ({
    type: SET_TOTAL_PAGE,
    payload: totalPage,
});

export const setMealType = (mealType) => ({
    type: SET_MEAL_TYPE,
    payload: mealType,
});

export const setIsLoadingRecipes = (mealType) => ({
    type: SET_IS_LOADING_RECIPES,
    payload: mealType,
});