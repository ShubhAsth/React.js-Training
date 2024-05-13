import React, {useEffect, useState} from 'react';
import {cuisines} from '../../appConstants/constants';
import {useDispatch} from "react-redux";
import {setSelectedCuisines} from "../../redux/actions/actions";


const CuisineFilter = () => {

    const [selectedCuisines, setCuisineFilter] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelectedCuisines(selectedCuisines));
    }, [selectedCuisines, dispatch]);
    const handleCheckboxChange = (event) => {
        const {value, checked} = event.target;
        setCuisineFilter(prevSelectedCuisines => {
            if (checked) {
                return [...prevSelectedCuisines, value];
            } else {
                return prevSelectedCuisines.filter((cuisine) => cuisine !== value);
            }
        });
    };

    return (
        <div className="w-64 h-96 overflow-y-scroll border border-gray-300 rounded p-4">
            <h3 className="mb-4">Cuisine Filter</h3>
            {cuisines.map((cuisine) => (
                <div key={cuisine} className="mb-2">
                    <input
                        type="checkbox"
                        id={cuisine}
                        value={cuisine}
                        className="mr-2"
                        checked={selectedCuisines.includes(cuisine)}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor={cuisine} className="break-words">
                        {cuisine}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CuisineFilter;