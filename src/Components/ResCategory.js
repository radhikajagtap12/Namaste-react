import { useState } from "react";
import ItemList from "./ItemList";
const ResCategory = ({data, showItems, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div className="container">
            <div className="py-3 px-3 shadow-md mb-5 mt-5">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <h1 className="font-bold text-red-500">{data.title} ({data.itemCards.length})</h1>
                    <span>🔽</span>
                </div>
                { showItems && <ItemList items={data.itemCards} />}
                
            </div>
            
        </div>
    )
}
export default ResCategory