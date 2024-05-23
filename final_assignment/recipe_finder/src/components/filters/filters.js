import React from 'react';
import CheckBoxFilter from "./checkBoxFilter";
import {AvailableFilterTypes, cuisines, defaultSearchQuery, diets} from "../../appConstants/constants";
import {createQuery, fetchRecipes} from "../../utils/Utils";
import {useDispatch, useSelector} from "react-redux";

function Filters() {

    const dispatch = useDispatch();
    const selectedCuisines = useSelector((state) => state.selectedCuisines);
    const selectedDiets = useSelector(state => state.selectedDiets)
    const searchInput = useSelector(state => state.searchInput)


    const handleFilterSubmit = () => {
        const query = createQuery(defaultSearchQuery, searchInput, selectedCuisines, selectedDiets, 0)
        fetchRecipes(query, dispatch);
    }

    return (
        <div>
            <button
                onClick={handleFilterSubmit}
                className="p-[10px] mb-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Apply Filter
            </button>
            <div className="bg-gradient-to-r from-white-800 to-white-600 h-full border border-gray-300 rounded p-4">
                <div className="mb-8">
                    <CheckBoxFilter acceptedValuesArray={cuisines} filterType={AvailableFilterTypes.CUISINE_FILTER}/>
                </div>
                <hr className="mb-4"/>
                <div className="mb-4">
                    <CheckBoxFilter acceptedValuesArray={diets} filterType={AvailableFilterTypes.DIET_FILTER}/>
                </div>
            </div>
        </div>
    );
}

export default Filters;
