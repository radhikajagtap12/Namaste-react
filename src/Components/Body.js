import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
const Body = () => {
	const [restaurantData, setRestaurantData] = useState([]);
	const [filterRestaurant, setFilterRestaurant] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(  () => {		 
		fetchData();
	}, []);

	const fetchData = async () => {
		const fetchList = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		const json = await fetchList.json();
		// optional Chaining
		const data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
		setRestaurantData(data);
		setFilterRestaurant(data);
	}

	const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

	// Conditional renderring data
	// if(restaurantData.length === 0){
	// 	return <Shimmer />
	// }

	const {loggedInUser, setUserName} = useContext(UserContext)

	// whenever state variable updates, react triggers a reconstruction cycle(rerenders component)

	return restaurantData.length === 0 ? <Shimmer /> : (
		<div className="body bodyBox">
			<div className="container">
				<div className="filter">
					<div className="search">
						<input type="text" placeholder="Search for restaurants" value={searchText} onChange={(e) =>{
							setSearchText(e.target.value);                            
						}} />
						<button onClick={()=>{
							console.log(searchText);
							const filteredList = restaurantData.filter(
								(res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
							);

							if(filteredList.length === 0) {
								fetchData()
                            } else {
							console.log(filteredList);
                            setFilterRestaurant(filteredList);
							}
						}}>Search</button>
                    </div>
					<button
						className="filter-btn"
						onClick={() => {
							const filteredList = restaurantData.filter(
								(res) => res.info.avgRating < 4.3
							);
							setFilterRestaurant(filteredList);
						}}>
						Top rated restaurants
					</button>
					<div className="flex items-center">
						<label className="mr-8">Name</label>
						<input className="border-black" value={loggedInUser}
						onChange={(e) => setUserName(e.target.value)}/>
					</div>
				</div>
				<div className="cardConatiner">
					{filterRestaurant.map((restaurant) => (
						<Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id }>
							{
								restaurant.info.isOpen ? (<PromotedRestaurantCard resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)
							}
							
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Body;
