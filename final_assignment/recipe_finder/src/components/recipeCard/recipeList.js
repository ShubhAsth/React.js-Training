import React, {useEffect, useState} from 'react';
import MiniRecipeCard from './miniRecipeCard';
import {Link} from "react-router-dom";
import Paginate from "../pagination/paginate";
import {useDispatch, useSelector} from "react-redux";
import {createQueryAndFetchData} from "../../utils/Utils";
import {maxRecordPerQuery, randomRecipeSearchQuery, recipeSearchQuery} from "../../appConstants/constants";
import NoRecipes from "../../recources/images/NoRecipesIcon.png";
import Loading from "../Loading";


function RecipeList() {
    const [currentPage, setCurrentPage] = useState(0)
    const dispatch = useDispatch();
    const state = useSelector(state => state)

    useEffect(() => {
        createQueryAndFetchData(randomRecipeSearchQuery, null, dispatch, 0)
    }, [dispatch]);

    useEffect(() => {
        setCurrentPage(0)
    }, [state.totalPage, dispatch]);

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber)
        createQueryAndFetchData(recipeSearchQuery, state, dispatch, pageNumber)
    }

    return (
        <div className="justify-center items-center">
            {state.isLoadingRecipes && <Loading/>}
            <div className="mb-4">
                {state.filteredRecipes === undefined || state.filteredRecipes.length === 0 ? (
                    <img src={NoRecipes} alt='No Recipes available' className="w-[20%] h-[20%] mt-[25%] ml-[35%]"/>
                ) : (
                    <div className="flex flex-wrap justify-center">
                        {state.filteredRecipes.map((recipe) => (
                            <Link to={`/recipe/${recipe.id}`}>
                                <MiniRecipeCard key={recipe.id} recipe={recipe} className="w-1/3 p-4"/>
                            </Link>
                        ))}
                    </div>
                )}
                <div className="flex justify-center mt-4">
                    {Math.ceil(state.totalPage / maxRecordPerQuery) > 1 && (
                        <Paginate totalPage={Math.ceil(state.totalPage / maxRecordPerQuery)} currentPage={currentPage}
                                  paginate={handlePagination}/>
                    )}
                </div>

            </div>
        </div>
    );
}

export default RecipeList;
