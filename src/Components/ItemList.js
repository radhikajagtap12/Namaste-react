import { CDN_URL } from "../utils/constants";
const ItemList = ({items}) => {
    return (
        <>
            {items.map(item => 
            <div key={item.card.info.id}>
                <div className="flex justify-between py-4 border-black-50 border-b-2">                    
                    <div className="">
                        <div className="flex font-medium">
                            <span>{item?.card?.info?.name } </span>
                            <span>  -  ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <p>
                            {item?.card?.info?.description}
                        </p>
                    </div>
                    <div className="ml-5 flex flex-col relative">
                        <img src={CDN_URL+item?.card?.info?.imageId} alt={item?.card?.info?.name} className="w-30 h-20"/>
                        <div className="absolute bottom-0 left-3">
                            <button className="border-black bg-black text-white border-2 mt-5 rounded-md font-medium text-sm block w-100 mr-0 center">Add +</button>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default ItemList;