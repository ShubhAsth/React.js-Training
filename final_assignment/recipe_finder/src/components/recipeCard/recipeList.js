import React, {useEffect, useState} from 'react';
import MiniRecipeCard from './miniRecipeCard';
import {Link} from "react-router-dom";

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await fetch(
                'https://api.spoonacular.com/recipes/random?number=10&apiKey=3367b85285bc4ef2b1a13d8b53ce0be4'
            );
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            setRecipes(data.recipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchRecipes();
    };

    return (
        <div className=" mx-auto px-4 py-8 justify-center items-center">
            <form onSubmit={handleSearchSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <button type="submit"
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Search
                </button>
            </form>
            {recipes.length === 0 ? (
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
        </div>
    );
}

export default RecipeList;
