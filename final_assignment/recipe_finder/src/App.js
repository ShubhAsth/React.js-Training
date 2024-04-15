import React from 'react';

import {Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import DetailedRecipeCard from "./components/recipeCard/detailedRecipeCard";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/recipe/:id" element={<DetailedRecipeCard/>}/>
            </Routes>
        </div>
    );
}

export default App;
