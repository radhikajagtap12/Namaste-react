import { CDN_URL } from "../utils/constants";

const cardStyle = {
    backgroundColor: '#f0f0f0',
    border: '#f1f1f1',
    padding: '10px',
    boderRadius: '4px'
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRatingString } = resData?.info;
    const {deliveryTime} = resData?.info?.sla;

    return (<div className="resCard" style={cardStyle}>
        <img src={CDN_URL + cloudinaryImageId }
        alt="CardImage"
        style={{width:'100%', height: '200px', objectFit:'cover'}} />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{deliveryTime} Min</h4>
    </div>
    )
}

export default RestaurantCard;