import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function DetailedRecipeCard() {
    const [recipe, setRecipe] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetchRecipeDetails(id);
    }, [id]);

    const fetchRecipeDetails = async (recipeId) => {
        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=3367b85285bc4ef2b1a13d8b53ce0be4`
            );
            if (!response.ok) {
                throw new Error('Failed to fetch recipe details');
            }
            const data = await response.json();
            setRecipe(data);
        } catch (error) {
            console.error('Error fetching recipe details:', error);
        }
    };

    if (!recipe) {
        return <p>Loading...</p>;
    }

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };

    const summaryText = stripHtmlTags(recipe.summary);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full h-64 object-cover" src={recipe.image} alt={recipe.title}/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{recipe.title}</div>
                        <div className="mb-4">
                            <p className="font-semibold">Summary:</p>
                            <p>{summaryText}</p>
                            <p>
                                <span className="font-semibold">Servings:</span> {recipe.servings}
                            </p>
                            <p>
                                <span className="font-semibold">Ready In Minutes:</span> {recipe.readyInMinutes}
                            </p>
                            <p>
                                <span className="font-semibold">Vegetarian:</span> {recipe.vegetarian ? 'Yes' : 'No'}
                            </p>
                            <p>
                                <span className="font-semibold">Vegan:</span> {recipe.vegan ? 'Yes' : 'No'}
                            </p>
                            <p className="font-semibold">Ingredients:</p>
                            <ul>
                                {recipe.extendedIngredients.map((ingredient, index) => (
                                    <li key={index} className="list-disc ml-4">{ingredient.original}</li>
                                ))}
                            </ul>
                            <p className="font-semibold">Instructions: </p>
                            <ul>
                                {recipe?.analyzedInstructions?.length > 0 ? (
                                    recipe.analyzedInstructions[0].steps.map((step, index) => (
                                        <li key={index} className="list-disc ml-4">{step.step}</li>
                                    ))
                                ) : (
                                    <li>No instructions available.</li>
                                )}
                            </ul>

                            <p>
                                <span
                                    className="font-semibold">Price Per Serving:</span> ${recipe.pricePerServing.toFixed(2)}
                            </p>
                            <p>
                                <span className="font-semibold">Health Score:</span> {recipe.healthScore}
                            </p>
                            <p>
                                <span
                                    className="font-semibold">Spoonacular Score:</span> {recipe.spoonacularScore.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailedRecipeCard;
