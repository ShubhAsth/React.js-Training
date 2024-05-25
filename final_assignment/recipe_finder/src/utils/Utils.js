import {maxRecordPerQuery} from "../appConstants/constants";
import {setRecipes, setTotalPage} from "../redux/actions/actions";

export const fetchRecipes = async (query) => {
    try {
        const response = await fetch(query);
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        return await response.json();
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
    } else {
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
            query += '&offset=' + currentPage * maxRecordPerQuery
        }
    }
    query += '&number=' + maxRecordPerQuery
    fetchRecipes(query).then(data => {
        if (query.includes('recipes/random')) {
            dispatch(setRecipes(data.recipes))
            dispatch(setTotalPage(maxRecordPerQuery))
        } else {
            dispatch(setRecipes(data.results))
            dispatch(setTotalPage(data.totalResults))
        }
    })
}

export const fetchData = async (query) => {
    try {
        const response = await fetch(query);
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        return await response.json();

    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}