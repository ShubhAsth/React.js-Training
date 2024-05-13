import React, {useEffect, useState} from 'react';
import MiniRecipeCard from './miniRecipeCard';
import {Link} from "react-router-dom";
import {apiKey, dummyData} from "../../appConstants/constants";
import Paginate from "../pagination/paginate";
import {useSelector} from "react-redux";


function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalRecipes, setTotalRecipes] = useState(0);
    const [updateQuery, setUpdateQuery] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const [searchInputHasError, setSearchInputHasError] = useState(false)
    const max = 12

    const defaultRandomQuery = 'https://api.spoonacular.com/recipes/random?number=12&apiKey=' + apiKey
    const defaultSearchQuery = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKey +
        '&addRecipeInformation=true&addRecipeInstructions=true&addRecipeNutrition=true'

    const selectedCuisines = useSelector((state) => state.selectedCuisines);

    useEffect(() => {
        fetchRecipes(defaultRandomQuery);
    }, []);

    useEffect(() => {
        setCurrentPage(0);
    }, [totalRecipes]);

    const fetchRecipes = async (query) => {
        // try {
        //     const response = await fetch(query);
        //     if (!response.ok) {
        //         throw new Error('Failed to fetch recipes');
        //     }
        //     const data = await response.json();
        //     if (query.includes('recipes/random')) {
        //         setRecipes(data.recipes);
        //         setTotalRecipes(12);
        //         setCurrentPage(0)
        //
        //     } else {
        //         setRecipes(data.results)
        //         setTotalRecipes(data.totalResults)
        //         setCurrentPage(data.offset / max)
        //     }
        // } catch (error) {
        //     console.error('Error fetching recipes:', error);
        // }

        setRecipes(dummyData.results)
        setCurrentPage(dummyData.offset / max)
        setTotalRecipes(dummyData.totalResults)
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSearchSubmit = () => {
        if (searchInput.length === 0) {
            setSearchInputHasError(true)
            return
        }
        setSearchInputHasError(false)
        var query = defaultSearchQuery
        if (selectedCuisines !== null && selectedCuisines.length !== 0) {
            query += '&cuisine=' + selectedCuisines.join(",")
        }
        query += '&query=' + searchInput
        query += '&number=' + max
        query += '&offset=' + currentPage * max
        setUpdateQuery(query)

        fetchRecipes(query);
    }

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
        const lastIndex = updateQuery.lastIndexOf('&');
        let query = ""
        if (lastIndex !== -1) {
            query = updateQuery.substring(0, lastIndex) + '&offset=' + pageNumber * max;
        }
        setUpdateQuery(query);
        fetchRecipes(query);
    }

    return (
        <div className="justify-center items-center">
            <div>
                {searchInputHasError && (
                    <span className='text-red-500'>Field Can't be Null</span>
                )}
                <div className="mb-4">
                    <input
                        id='searchRecipe'
                        type="text"
                        onChange={handleSearchInputChange}
                        value={searchInput}
                        placeholder="Search recipes..."
                        className="border w-[40%] border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <button type="submit" onClick={handleSearchSubmit}
                            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Search
                    </button>
                </div>
            </div>
            <div className="mb-4">
                {recipes === undefined || recipes.length === 0 ? (
                    <p className="text-center text-xl font-semibold text-gray-700">No data available</p>
                ) : (
                    <div className="flex flex-wrap justify-center">
                        {recipes.map((recipe) => (
                            <Link to={`/recipe/${recipe.id}`}>
                                <MiniRecipeCard key={recipe.id} recipe={recipe} className="w-1/3 p-4"/>
                            </Link>
                        ))}
                    </div>
                )}
                <div className="flex justify-center mt-4">
                    {Math.ceil(totalRecipes / max) > 1 && (
                        <Paginate totalPage={Math.ceil(totalRecipes / max)} currentPage={currentPage}
                                  paginate={handlePagination}/>
                    )}
                </div>

            </div>
        </div>
    );
}

export default RecipeList;
