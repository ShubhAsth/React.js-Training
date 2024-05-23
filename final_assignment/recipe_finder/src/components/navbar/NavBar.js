import React, {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {createQuery, fetchRecipes} from "../../utils/Utils";
import {useDispatch, useSelector} from "react-redux";
import {defaultSearchQuery} from "../../appConstants/constants";
import SearchLogo from "../../recources/images/searchLogo.webp"
import {setSearchInput} from "../../redux/actions/actions";


const Navbar = () => {
    const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();

    const dispatch = useDispatch();
    const selectedCuisines = useSelector((state) => state.selectedCuisines);
    const selectedDiets = useSelector(state => state.selectedDiets)
    const searchInput = useSelector(state => state.searchInput)

    const handleSearchSubmit = () => {
        if (searchInput.length === 0) {
            alert("cant be null")
            return
        }
        const query = createQuery(defaultSearchQuery, searchInput, selectedCuisines, selectedDiets, 0)
        fetchRecipes(query, dispatch);
    }

    const handleSearchInputChange = (event) => {
        dispatch(setSearchInput(event.target.value))
    }

    return (
        <header className="bg-gray-800 text-white flex justify-between items-center px-4 py-2 shadow-md sm:px-6">
            <div className="flex items-center">
                <p className="text-lg font-bold text-white">FlavorQuest</p>
            </div>
            <div className='flex items-center w-[50%]'>
                <div
                    className="flex w-full h-[50px] bg-white items-center border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                    <input
                        id='searchRecipe'
                        type="text"
                        onChange={handleSearchInputChange}
                        value={searchInput}
                        placeholder="Search recipes..."
                        className="w-full m-1 px-3 py-2 focus:outline-none text-black"
                    />
                    <button type="submit" onClick={handleSearchSubmit} className='m-2 h-full'>
                        <img src={SearchLogo} alt="Search" className='h-full'/>
                    </button>
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
        </header>
    );
};

export default Navbar;
