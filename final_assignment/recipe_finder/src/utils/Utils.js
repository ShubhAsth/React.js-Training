import {maxDataRecipePage} from "../appConstants/constants";
import {setRecipes, setTotalPage} from "../redux/actions/actions";

export const fetchRecipes = async (query, dispatch) => {
    try {
        const response = await fetch(query);
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        if (query.includes('recipes/random')) {
            dispatch(setRecipes(data.recipes))
            dispatch(setTotalPage(maxDataRecipePage))
        } else {
            dispatch(setRecipes(data.results))
            dispatch(setTotalPage(data.totalResults))
        }
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }

    // dispatch(setRecipes(dummyData.results))
    // dispatch(setTotalPage(dummyData.totalResults))
    // console.log(query)
}

export const createQueryAndFetchData = (defaultQuery, state, dispatch, currentPage) => {
    let query = '';
    if (defaultQuery.includes('recipes/random')) {
        query = defaultQuery
    }else {
        query = defaultQuery
        if (state.searchInput.length !== null && state.searchInput.length !== 0) {
            query += '&query=' + state.searchInput
        }
        if (state.selectedCuisines !== null && state.selectedCuisines.length !== 0) {
            query += '&cuisine=' + state.selectedCuisines.join(",")
        }
        if (state.selectedDiets !== null && state.selectedDiets.length !== 0) {
            query += '&diet=' + state.selectedDiets.join("|")
        }
        if (state.mealType !== null && state.mealType.length !== 0) {
            query += '&type=' + state.mealType.join(",")
        }
        if (currentPage !== null && currentPage > -1) {
            query += '&offset=' + currentPage * maxDataRecipePage
        }
    }
    query += '&number=' + maxDataRecipePage
    fetchRecipes(query, dispatch)
}