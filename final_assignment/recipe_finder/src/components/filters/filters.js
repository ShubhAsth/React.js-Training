import React, {useState} from 'react';
import CheckBoxFilter from "./checkBoxFilter";
import {AvailableFilterTypes, cuisines, diets, mealType, recipeSearchQuery} from "../../appConstants/constants";
import {createQueryAndFetchData} from "../../utils/Utils";
import {useDispatch, useSelector} from "react-redux";

function Filters() {

    const [isCuisinesHidden, setIsCuisinesHidden] = useState(true)
    const [isDietsHidden, setIsDietsHidden] = useState(true)
    const [isMealTypeHidden, setIsMealTypeHidden] = useState(true)
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const handleFilterSubmit = () => {
        createQueryAndFetchData(recipeSearchQuery, state, dispatch, 0)
    }

    return (
        <div>
            <button
                onClick={handleFilterSubmit}
                className="p-[10px] mb-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Apply Filter
            </button>
            <div className="bg-gradient-to-r from-white-800 to-white-600 h-full border border-gray-300 rounded p-4">
                <div>
                    <CheckBoxFilter acceptedValuesArray={cuisines} filterType={AvailableFilterTypes.CUISINE_FILTER}
                                    isFilterHidden={isCuisinesHidden} setFilterHiddenValue={setIsCuisinesHidden}/>
                </div>
                <hr className="mb-4"/>
                <div>
                    <CheckBoxFilter acceptedValuesArray={diets} filterType={AvailableFilterTypes.DIET_FILTER}
                                    isFilterHidden={isDietsHidden} setFilterHiddenValue={setIsDietsHidden}/>
                </div>
                <hr className="mb-4"/>
                <div>
                    <CheckBoxFilter acceptedValuesArray={mealType} filterType={AvailableFilterTypes.MEAL_TYPE_FILTER}
                                    isFilterHidden={isMealTypeHidden} setFilterHiddenValue={setIsMealTypeHidden}/>
                </div>
            </div>
        </div>
    );
}

export default Filters;
