import React, {useEffect, useState} from 'react';
import {AvailableFilterTypes} from '../../appConstants/constants';
import {useDispatch} from "react-redux";
import {setMealType, setSelectedCuisines, setSelectedDiets} from "../../redux/actions/actions";


function CheckBoxFilter({acceptedValuesArray, filterType}) {

    const [selectedFilterData, setFilterData] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        switch (filterType) {
            case AvailableFilterTypes.CUISINE_FILTER:
                dispatch(setSelectedCuisines(selectedFilterData));
                return
            case AvailableFilterTypes.DIET_FILTER:
                dispatch(setSelectedDiets(selectedFilterData));
                return
            case AvailableFilterTypes.MEAL_TYPE_FILTER:
                dispatch(setMealType(selectedFilterData));
                return
            default:
                return
        }
    }, [selectedFilterData, dispatch, filterType]);
    const handleCheckboxChange = (event) => {
        const {value, checked} = event.target;
        setFilterData(prevSelectedData => {
            if (checked) {
                return [...prevSelectedData, value];
            } else {
                return prevSelectedData.filter((data) => data !== value);
            }
        });
    };

    return (
        <div>
            <h3 className="font-bold mb-4">{filterType.toUpperCase()}</h3>
            <div className="overflow-y-scroll h-60">
                {acceptedValuesArray.map((data) => (
                    <div key={data} className="mb-2">
                        <input
                            type="checkbox"
                            id={data}
                            value={data}
                            className="mr-2"
                            checked={selectedFilterData.includes(data)}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={data} className="break-words">
                            {data}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CheckBoxFilter;