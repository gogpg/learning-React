import { useContext } from "react";
import DataPlus from "./DataPlus";
import L3 from "./L3";

function L2({ stars }) {

    const { minuses } = useContext(DataPlus);  //galiu tuos pacius minusus providint i koki noriu elementa is DataPlus

    return (
        
        <div className="star">
            <h2>{minuses}</h2>
            <L3 stars={stars} />   
        </div>
        
    )
}

export default L2;