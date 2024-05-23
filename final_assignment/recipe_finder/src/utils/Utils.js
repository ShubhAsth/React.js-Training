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

export const createQuery = (defaultQuery, searchInput, selectedCuisines, selectedDiets, currentPage) => {
    var query = ''
    if (defaultQuery.includes('recipes/random')) {
        query = defaultQuery
        query += '&number=' + maxDataRecipePage
        return query
    }
    query = defaultQuery
    if (searchInput.length !== null && searchInput.length !== 0) {
        query += '&query=' + searchInput
    }
    if (selectedCuisines !== null && selectedCuisines.length !== 0) {
        query += '&cuisine=' + selectedCuisines.join(",")
    }
    if (selectedDiets !== null && selectedDiets.length !== 0) {
        query += '&diet=' + selectedDiets.join("|")
    }
    if (currentPage !== null && currentPage > -1) {
        query += '&offset=' + currentPage * maxDataRecipePage
    }
    query += '&number=' + maxDataRecipePage
    return query
}