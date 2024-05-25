import React, {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {createQueryAndFetchData, fetchData} from "../../utils/Utils";
import {useDispatch, useSelector} from "react-redux";
import {
    autoCompleteQuery,
    maxRecordPerQuery,
    randomRecipeSearchQuery,
    recipeSearchQuery
} from "../../appConstants/constants";
import SearchLogo from "../../recources/images/searchLogo.webp"
import {setSearchInput} from "../../redux/actions/actions";

const Navbar = () => {
    const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
    const [suggestions, setSuggestions] = useState([]);
    const [recipeInput, setRecipeInput] = useState("");

    const dispatch = useDispatch();
    const state = useSelector(state => state)

    const handleSearchSubmit = () => {
        if (recipeInput.length === 0) {
            createQueryAndFetchData(randomRecipeSearchQuery, null, dispatch, 0)
            return
        }
        setSuggestions([])
        createQueryAndFetchData(recipeSearchQuery, state, dispatch, 0)
    }

    const handleSearchInputChange = (event) => {
        if (event.target.value.length > 2) {
            let query = autoCompleteQuery + "&number=" + maxRecordPerQuery + "&query="
            query += event.target.value
            fetchData(query).then(data => setSuggestions(data.map(item => item.title)))
        } else {
            setSuggestions([])
        }
        setRecipeInput(event.target.value)
        dispatch(setSearchInput(event.target.value))
    }

    const handleSuggestionClick = (event) => {
        setRecipeInput(event.target.innerText)
        dispatch(setSearchInput(event.target.innerText))
        setSuggestions([])
    }

    return (
        <header className="bg-gray-800 text-white flex justify-between items-center px-4 py-2 shadow-md sm:px-6">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    <p className="text-lg font-bold text-white">FlavorQuest</p>
                </div>
                <div className="relative flex-grow flex justify-center">
                    <div className="relative w-[70%]">
                        <div
                            className="flex h-[50px] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                            <input
                                id='searchRecipe'
                                type="text"
                                onChange={handleSearchInputChange}
                                value={recipeInput}
                                placeholder="Search recipes..."
                                className="w-full m-1 px-3 py-2 focus:outline-none text-black"
                            />
                            <button type="submit" onClick={handleSearchSubmit}>
                                <img src={SearchLogo} alt="Search" className='h-full'/>
                            </button>
                        </div>
                        {suggestions.length > 0 && (
                            <div
                                className="absolute z-10 w-full bg-white text-black border border-gray-300 rounded-md mt-1">
                                {suggestions.map((suggestion, index) => (
                                    <div key={index} className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                                         onClick={handleSuggestionClick}>
                                        {suggestion}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    {isAuthenticated && (
                        <img
                            className="w-10 h-10 rounded-lg bg-gray-700"
                            src={user.picture}
                            alt={user.name}
                        />
                    )}
                    {isAuthenticated ? (
                        <button
                            className="px-3 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-base"
                            onClick={() => logout()}
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            className="px-3 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-base"
                            onClick={() => loginWithRedirect()}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
