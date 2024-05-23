import React, {useEffect, useState} from 'react';
import MiniRecipeCard from './miniRecipeCard';
import {Link} from "react-router-dom";
import Paginate from "../pagination/paginate";
import {useDispatch, useSelector} from "react-redux";
import {createQuery, fetchRecipes} from "../../utils/Utils";
import {defaultRandomQuery, defaultSearchQuery, maxDataRecipePage} from "../../appConstants/constants";


function RecipeList() {
    const [currentPage, setCurrentPage] = useState(0)
    const dispatch = useDispatch();
    const searchInput = useSelector(state => state.searchInput)
    const recipes = useSelector((state) => state.filteredRecipes);
    const totalPage = useSelector((state) => state.totalPage);
    const cuisineFilter = useSelector((state) => state.selectedCuisines);
    const dietFiler = useSelector((state) => state.selectedDiets);


    useEffect(() => {
        const query = createQuery(defaultRandomQuery, null, null, null, null)
        fetchRecipes(query, dispatch);
    }, [dispatch]);

    useEffect(() => {
        setCurrentPage(0)
    }, [totalPage, dispatch]);

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber)
        const query = createQuery(defaultSearchQuery, searchInput, cuisineFilter, dietFiler, pageNumber)
        fetchRecipes(query, dispatch);
    }

    return (
        <div className="justify-center items-center">
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
                    {Math.ceil(totalPage / maxDataRecipePage) > 1 && (
                        <Paginate totalPage={Math.ceil(totalPage / maxDataRecipePage)} currentPage={currentPage}
                                  paginate={handlePagination}/>
                    )}
                </div>

            </div>
        </div>
    );
}

export default RecipeList;
