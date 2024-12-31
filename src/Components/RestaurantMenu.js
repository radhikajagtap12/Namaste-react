import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

    const { resId } = useParams();

    const resData = useRestaurantMenu(resId);

    if(resData === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resData.cards[2]?.card?.card?.info;
    // console.log(name, cuisines, costForTwoMessage);
        const {itemCards} = resData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {itemCards.map ( (item) => (<li key={item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;