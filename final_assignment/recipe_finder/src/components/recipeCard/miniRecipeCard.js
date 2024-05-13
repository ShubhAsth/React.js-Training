import React from "react";
import ImageNotAvailable from "../../recources/images/ImageNotAvailable.webp"

function MiniRecipeCard({recipe}) {
    if (!recipe) {
        return null;
    }

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

    const summaryText = stripHtmlTags(recipe.summary).slice(0, 60);
    const hasMoreThan60 = recipe.summary.length > 60;

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-5">
            <div>
                <img className="w-full " src={recipe.image} alt={recipe.title}
                     onError={(e) => {
                         e.target.src = ImageNotAvailable;
                     }}
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{recipe.title}</div>
                <p>
                    {summaryText}
                    {hasMoreThan60 && "..."}
                </p>
                <p className="text-gray-700 text-base mb-[8px]">
                    Rating: {recipe.spoonacularScore.toFixed(2)}
                </p>
                <div className="flex w-full justify-around">
                    <div
                        className={`${
                            recipe.vegetarian ? "bg-green-500" : "bg-red-500"
                        } text-white px-2 py-1 rounded-[10px] w-[130px] text-center`}
                    >
                        {recipe.vegetarian ? "Vegetarian" : "Non Vegetarian"}
                    </div>
                    {recipe.vegan && (
                        <div className="bg-gray-500 text-white px-2 py-1 rounded-[10px] w-[130px] text-center">
                            Vegan
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
}

export default MiniRecipeCard;
