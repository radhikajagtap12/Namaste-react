import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
import { useState } from "react";
const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0)

    const { resId } = useParams();

    const resData = useRestaurantMenu(resId);

    if(resData === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resData.cards[2]?.card?.card?.info;
    // console.log(name, cuisines, costForTwoMessage);
    const {itemCards} = resData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

    const cardCategories = 
    resData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        
    return (
        <div className="menu mt-3 mb-3">
            <div className="container flex justify-between mt-3 mb-3">
                <h1 className="text-lg font-bold">{name}</h1>
                <h2 className="text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h2>
            </div>
            <div className="container mt-10">
                {cardCategories.map((category, index) => (<ResCategory 
                key={category.card.card.title} 
                data={category?.card?.card}
                showItems = {showIndex === index ? true : false}
                setShowIndex={ () => setShowIndex(index)}
                />))}
            </div>
        </div>
    );
}

export default RestaurantMenu;