import React, {useState} from 'react';
import Navbar from "../navbar/NavBar";
import RecipeList from "../recipeCard/recipeList";
import Filters from "../filters/filters";

function HomePage() {
    return (
        <div className="bg-gradient-to-r from-white-600 to-red-400 min-h-screen flex flex-col">
            <div className='sticky top-0 '>
                <div className="bg-gradient-to-r from-green-800 to-green-600">
                    <Navbar/>
                </div>
            </div>
            <div className="flex">
                <div>
                    <div className="container mx-auto px-4 py-8">
                        <Filters />
                    </div>
                </div>
                <div className="w-[100%]">
                    <div className="container px-4 py-8">
                        <RecipeList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
