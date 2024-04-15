import React from 'react'
import Navbar from "../navbar/NavBar";
import RecipeList from "../recipeCard/recipeList";

function HomePage() {
    return (
        <div>
            <div className='bg-gradient-to-r from-white-600 to-red-400 min-h-screen'>
                <div className='bg-gradient-to-r from-green-800 to-green-600'>
                    <Navbar/>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <RecipeList/>
                </div>
            </div>
        </div>
    )
}

export default HomePage